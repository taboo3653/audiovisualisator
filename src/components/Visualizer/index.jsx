import React from 'react';
import PropTypes from 'prop-types';

import Cell from '../Cell';

import './Visualizer.scss';

const Visualizer = ({ theme, values, size }) => {
  const cells = values.map((item, index) => {
    // eslint-disable-next-line react/no-array-index-key
    return <Cell key={index} value={item} theme={theme} />;
  });
  /* for (let i = 0; i < this.dataArray; i++) {
      cells.push(<Cell key={i} />);
    } */

  return (
    <div className={`Visualizer Visualizer_${size.toString()}`}>
      {cells}
    </div>
  );
};

Visualizer.propTypes = {
  theme: PropTypes.number.isRequired,
  values: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default Visualizer;
