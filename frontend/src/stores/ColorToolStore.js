import { makeAutoObservable } from 'mobx';

export class ColorToolStore {

  // observable state
  colors = [];

  constructor(rootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
  }

  // action
  addColor = (newColor) => {
    this.colors.push({
      id: Math.max(...this.colors.map(color => color.id), 0) + 1,
      ...newColor,
    });
  }

  // action
  deleteColor = (colorId) => {
    const colorIndex = this.colors.findIndex(
      color => color.id === colorId);
    this.colors.splice(colorIndex, 1);
  }

}