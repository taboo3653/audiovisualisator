import React from 'react';

import PropTypes from 'prop-types';
import ListGroup from 'react-bootstrap/ListGroup';
import Size from 'utils/Size';
import { ColorEnum } from 'utils/values';
import hashCode from 'utils/hashCode';

import './Switcher.scss';

const Switcher = ({ handleSwitcher, active, values, theme }) => {
  let className;

  switch (theme) {
    case ColorEnum.RED:
      className =
        'list-group-item list-group-item-danger custom-list-group-item';
      break;

    case ColorEnum.BLUE:
      className =
        'list-group-item list-group-item-primary custom-list-group-item';
      break;

    default:
      className =
        'list-group-item list-group-item-danger custom-list-group-item';
  }

  return (
    <ListGroup horizontal>
      {values.map(item => (
        <ListGroup.Item
          className={className}
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
  theme: PropTypes.string.isRequired,

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
