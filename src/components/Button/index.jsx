import React from 'react';
import ButtonBS from 'react-bootstrap/Button';

const Button = ({ text, onClick }) => {
  return (
    <ButtonBS variant="primary" onClick={onClick}>
      {text}
    </ButtonBS>
  );
};

export default Button;
