import React from 'react';

import PropTypes from 'prop-types';
import ListGroup from 'react-bootstrap/ListGroup';
import Size from 'utils/Size';

import hashCode from 'utils/hashCode';

const Switcher = ({ handleSwitcher, active, values }) => {
  return (
    <ListGroup horizontal>
      {values.map(item => (
        <ListGroup.Item
          as="button"
          action
          key={hashCode(item.toString())}
          active={active === item}
          onClick={() => {
            handleSwitcher(item);
          }}
        >
          {item.toString()}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

Switcher.propTypes = {
  handleSwitcher: PropTypes.func,

  active: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(Size),
  ]).isRequired,

  values: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.instanceOf(Size),
    ]).isRequired,
  ).isRequired,
};

Switcher.defaultProps = {
  handleSwitcher: () => {},
};

export default Switcher;
