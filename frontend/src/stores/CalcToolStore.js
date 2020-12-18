import { makeAutoObservable } from 'mobx';

import { ADD, SUBTRACT, MULTIPLY, DIVIDE } from '../constants/calcToolConstants';

export class CalcToolStore {

  // observable state
  history = [];

  // computed property
  get result() {

    return this.history.reduce((result, entry) => {

      switch (entry.opName) {
        case ADD:
          return result + entry.opValue;
        case SUBTRACT:
          return result - entry.opValue;
        case MULTIPLY:
          return result * entry.opValue;
        case DIVIDE:
          return result / entry.opValue;
        default:
          return result;
      }

    }, 0);


  }

  // computed property
  get opCounts() {

    return this.history.reduce((opCounts, entry) => {
      switch (entry.opName) {
        case ADD:
          opCounts.add++;
          break;
        case SUBTRACT:
          opCounts.subtract++;
          break;
        case MULTIPLY:
          opCounts.multiply++;
          break;
        case DIVIDE:
          opCounts.divide++;
          break;
        default:
          break;
      }

      return opCounts;

    }, {
      add: 0,
      subtract: 0,
      multiply: 0,
      divide: 0,
    });

  }

  constructor(rootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
  }

  // action
  clearHistory() {
    this.history = [];
  }

  // action
  appendToHistory(opName, opValue) {
    this.history.push({
      id: Math.max(...this.history.map(entry => entry.id), 0) + 1,
      opName,
      opValue,
    });
  }

  // action
  deleteHistoryEntry(entryId) {
    const entryIndex = this.history.findIndex(
      entry => entry.id === entryId);
    this.history.splice(entryIndex, 1);
  }

}