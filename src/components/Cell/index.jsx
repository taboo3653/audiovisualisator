import React from 'react';
import colorGenerator from 'utils/colorGenerator';
import PropTypes from 'prop-types';

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

Cell.propTypes = {
  theme: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};

export default Cell;
