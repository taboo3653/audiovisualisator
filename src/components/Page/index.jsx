/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';
import Switcher from 'components/Switcher';
import Visuliser from 'components/Visualizer';
import Button from 'components/Button';
import PlayToggler from 'components/PlayToggler';
import { ColorEnum, SizeEnum } from 'utils/values';
import AudioAnalyser from 'utils/AudioAnalyser';

import audioFile from '../../assets/audio/song1.mp3';
import './Page.scss';

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: ColorEnum.RED,
      size: SizeEnum.SIZE1,
      isPlayed: false,
      values: [],
    };
    this.audioRef = React.createRef();
  }

  componentDidUpdate(prevProps, prevState) {
    const { isPlayed } = this.state;
    if (prevState.isPlayed !== isPlayed) {
      if (isPlayed) this.play();
      else this.pause();
    }
  }

  handleThemeSwitcher = theme => {
    this.setState({ theme });
  };

  handleSizeSwitcher = size => {
    this.setState({ size });
  };

  handlePlayClick = isPlayed => {
    this.setState({ isPlayed });
  };

  play = play => {
    if (!this.audioAnalyser) {
      this.audioAnalyser = new AudioAnalyser(this.audioRef.current);
    }

    this.audioRef.current.play();

    this.interval = setInterval(() => {
      const values = this.audioAnalyser.getByteFrequencyData();

      this.setState({ values });
    }, 70);
  };

  pause = () => {
    this.audioRef.current.pause();
    clearInterval(this.interval);
  };

  render() {
    const { theme, values, size, isPlayed } = this.state;
    return (
      <>
        <audio ref={this.audioRef} src={audioFile} />

        <div className="Page">
          <div className="Page__controlElements">
            <PlayToggler
              handlePlayClick={this.handlePlayClick}
              isPlayed={isPlayed}
            />
            {/* <Button text="Play" onClick={this.handlePlayClick} /> */}
            <Switcher
              active={size}
              values={[
                SizeEnum.SIZE1,
                SizeEnum.SIZE2,
                SizeEnum.SIZE3,
              ]}
              handleSwitcher={this.handleSizeSwitcher}
            />
            <Switcher
              active={theme}
              values={[
                ColorEnum.RED,
                ColorEnum.GREEN,
                ColorEnum.BLUE,
              ]}
              handleSwitcher={this.handleThemeSwitcher}
            />
          </div>

          <Visuliser theme={theme} values={values} />
        </div>
      </>
    );
  }
}

export default Page;
