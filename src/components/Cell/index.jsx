import React from 'react';
import colorGenerator from 'utils/colorGenerator';

import './Cell.scss';

const Cell = ({ theme, value }) => {
  const divStyle = {
    backgroundColor: colorGenerator(theme, value),
  };

  return (
    <div className="Cell" style={divStyle}>
      {' '}
    </div>
  );
};

export default Cell;
