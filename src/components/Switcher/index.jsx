import React from 'react';

import PropTypes from 'prop-types';
import ListGroup from 'react-bootstrap/ListGroup';
import { ColorEnum } from 'utils/values';

const Switcher = ({ handleSwitcher, active, values }) => {
  return (
    <ListGroup horizontal>
      {values.map(item => (
        <ListGroup.Item
          as="button"
          action
          active={active === item}
          onClick={() => {
            handleSwitcher(item);
          }}
        >
          {item}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

Switcher.propTypes = {
  handleSwitcher: PropTypes.func,
};

Switcher.defaultProps = {
  handleSwitcher: () => {},
};

export default Switcher;
