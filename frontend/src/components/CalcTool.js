import { useState, useCallback } from 'react';
import { observer } from 'mobx-react-lite';

import { HistoryList } from './HistoryList';

import { ADD, SUBTRACT, MULTIPLY, DIVIDE } from '../constants/calcToolConstants';

export const CalcTool = observer(function CalcTool({ store }) {

  const [numInput, setNumInput] = useState(0);

  const clearCalculator = useCallback(function clearCalculator() {
    store.clearHistory();
    setNumInput(0);
  }, [store]);

  return (
    <>
      <div>
        Result: {store.result}
      </div>
      <form>
        <label>Num: <input type="number" value={numInput}
          onChange={(e) => setNumInput(Number(e.target.value))} /></label>
        <fieldset>
          <button type="button" onClick={() => store.appendToHistory(ADD, numInput)}>
            +</button>
          <button type="button" onClick={() => store.appendToHistory(SUBTRACT, numInput)}>
            -</button>
          <button type="button" onClick={() => store.appendToHistory(MULTIPLY, numInput)}>
            *</button>
          <button type="button" onClick={() => store.appendToHistory(DIVIDE, numInput)}>
            /</button>
          <button type="button" onClick={clearCalculator}>
            Clear</button>
        </fieldset>
      </form>
      <HistoryList store={store} />
      <table>
        <thead>
          <tr>
            <th>Add</th>
            <th>Subtract</th>
            <th>Multiply</th>
            <th>Divide</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{store.opCounts.add}</td>
            <td>{store.opCounts.subtract}</td>
            <td>{store.opCounts.multiply}</td>
            <td>{store.opCounts.divide}</td>
          </tr>
        </tbody>
      </table>
    </>
  )

});