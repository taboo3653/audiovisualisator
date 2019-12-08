import React from 'react';
import PropTypes from 'prop-types';

import ButtonBS from 'react-bootstrap/Button';

import './Button.scss';

const Button = ({ text, onClick, variant }) => {
  return (
    <ButtonBS className="Button" variant={variant} onClick={onClick}>
      {text}
    </ButtonBS>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  variant: PropTypes.string,
};

Button.defaultProps = {
  text: '',
  onClick: () => {},
  variant: 'primary',
};

export default Button;
