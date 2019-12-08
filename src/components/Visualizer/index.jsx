import React from 'react';
import PropTypes from 'prop-types';

import Cell from '../Cell';

import './Visualizer.scss';

const Visualizer = ({ theme, values, size }) => {
  const cells = values.map((item, index) => {
    // eslint-disable-next-line react/no-array-index-key
    return <Cell key={index} value={item} theme={theme} />;
  });

  return (
    <div className={`Visualizer Visualizer_${size}`}>{cells}</div>
  );
};

Visualizer.propTypes = {
  theme: PropTypes.string.isRequired,
  values: PropTypes.arrayOf(PropTypes.number).isRequired,
  size: PropTypes.string.isRequired,
};

export default Visualizer;
