import React from 'react';
import { ColorEnum } from 'utils/values';

import './Cell.scss';

const Cell = ({ value, theme }) => {
  let backgroundColor;
  switch (theme) {
    case ColorEnum.RED:
      if (value < 128)
        backgroundColor = `rgba(${value * 2},${value * 2}, 0, 1)`;
      else {
        if (value * 2 - 255 > 240) console.log(value * 2 - 255);
        backgroundColor = `rgba(255,${value * 2 - 255}, 0, 1)`;
      }
      break;
    case ColorEnum.GREEN:
      backgroundColor = `rgba(0, ${value}, 0, 1)`;
      break;
    case ColorEnum.BLUE:
      backgroundColor = `rgba(0, 0, ${value}, 1)`;
      break;
    default:
      if (value < 128)
        backgroundColor = `rgba(${value * 2},${value * 2}, 0, 1)`;
      else {
        if (value * 2 - 255 > 240) console.log(value * 2 - 255);
        backgroundColor = `rgba(255,${value * 2 - 255}, 0, 1)`;
      }
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
