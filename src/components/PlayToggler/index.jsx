import React from 'react';
import Button from 'components/Button';
import PropTypes from 'prop-types';

const PlayToggler = ({ handlePlayClick, isPlayed }) => {
  return isPlayed ? (
    <Button
      variant="light"
      text="Pause"
      onClick={() => handlePlayClick(false)}
    />
  ) : (
    <Button
      variant="success"
      text="Play"
      onClick={() => handlePlayClick(true)}
    />
  );
};

export default PlayToggler;
