import React from 'react';
import { ColorEnum } from 'utils/values';

import './Cell.scss';

const Cell = ({ value, theme }) => {
  let backgroundColor;
  switch (theme) {
    case ColorEnum.RED:
      backgroundColor = `rgba(${value},0, 0, 1)`;
      break;
    case ColorEnum.GREEN:
      backgroundColor = `rgba(0, ${value}, 0, 1)`;
      break;
    case ColorEnum.BLUE:
      backgroundColor = `rgba(0, 0, ${value}, 1)`;
      break;
    default:
      backgroundColor = `rgba(${value}, 0, 0, 1)`;
  }

  const divStyle = {
    backgroundColor,
  };

  return (
    <div className="Cell" style={divStyle}>
      {' '}
    </div>
  );
};

export default Cell;
