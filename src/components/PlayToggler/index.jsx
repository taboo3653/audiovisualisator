import React from 'react';
import Button from 'components/Button';
import PropTypes from 'prop-types';

const PlayToggler = ({ handlePlayClick, isPlayed }) => {
  return isPlayed ? (
    <Button
      variant="secondary"
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

PlayToggler.propTypes = {
  isPlayed: PropTypes.bool.isRequired,
  handlePlayClick: PropTypes.func.isRequired,
};

export default PlayToggler;
