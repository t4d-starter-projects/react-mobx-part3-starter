import React from 'react';
import PropTypes from 'prop-types';

import { observer } from 'mobx-react-lite';

import { ColorForm } from './ColorForm';

export const ColorTool = observer(({ store }) => {

  return (
    <>
      <ul>
        {store.colors.map(color =>
          <li key={color.id}>
            {color.name}
            <button type="button" onClick={() => store.deleteColor(color.id)}>X</button>
          </li>)}
      </ul>
      <ColorForm buttonText="Add Color" onSubmitColor={store.addColor} />
    </>
  );

});

ColorTool.defaultProps = {
  colors: [],
};

ColorTool.propTypes = {
  colors: PropTypes.array.isRequired,
};