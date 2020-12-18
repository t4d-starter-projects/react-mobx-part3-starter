import { ColorTool } from '../components/ColorTool';

import { useRootStore } from '../contexts/rootStoreContext';

const ColorToolPage = function ColorToolPage() {

  const rootStore = useRootStore();

  return (
    <div>
      <h2>Color Tool</h2>
      <ColorTool store={rootStore.colorToolStore} />
    </div>
  );
};

export default ColorToolPage;