import React from 'react';
import PropTypes from 'prop-types';
import ListGroup from 'react-bootstrap/ListGroup';
import { ColorEnum } from 'utils/values';

const ThemeSwitcher = ({ handleThemeSwitcher }) => {
  return (
    <ListGroup horizontal defaultActiveKey="#red">
      <ListGroup.Item
        as="button"
        action
        onClick={() => {
          handleThemeSwitcher(ColorEnum.RED);
        }}
      >
        Red
      </ListGroup.Item>
      <ListGroup.Item
        as="button"
        action
        onClick={() => {
          handleThemeSwitcher(ColorEnum.GREEN);
        }}
      >
        Green
      </ListGroup.Item>
      <ListGroup.Item
        as="button"
        action
        onClick={() => {
          handleThemeSwitcher(ColorEnum.BLUE);
        }}
      >
        Blue
      </ListGroup.Item>
    </ListGroup>
  );
};

ThemeSwitcher.propTypes = {
  handleThemeSwitcher: PropTypes.func,
};

ThemeSwitcher.defaultProps = {
  handleThemeSwitcher: () => {},
};

export default ThemeSwitcher;
