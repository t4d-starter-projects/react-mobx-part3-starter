import { observer } from 'mobx-react-lite';

export const HistoryList = observer(function HistoryList({ store }) {

  return (
    <ul>
      {store.history.map(entry => {

        console.log('render entry');

        return (
          <li key={entry.id}>
            {entry.opName} {entry.opValue}
            <button onClick={() => store.deleteHistoryEntry(entry.id)}>X</button>
          </li>
        );
      })}
    </ul>
  );

});