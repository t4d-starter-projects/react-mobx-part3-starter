import { CalcTool } from '../components/CalcTool';

import { useRootStore } from '../contexts/rootStoreContext';

const CalcToolPage = function CalcToolPage() {

  const rootStore = useRootStore();

  return (
    <div>
      <h2>Calc Tool</h2>
      <CalcTool store={rootStore.calcToolStore} />
    </div>
  );
};

export default CalcToolPage;