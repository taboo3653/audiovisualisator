/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';
import Switcher from 'components/Switcher';
import Visuliser from 'components/Visualizer';
import Button from 'components/Button';
import { ColorEnum, SizeEnum } from 'utils/values';

import audioFile from '../../assets/audio/song1.mp3';
import './Page.scss';

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: ColorEnum.RED,
      size: SizeEnum.SIZE1,
      values: [],
    };
    this.audioRef = React.createRef();
    // this.soundingAudioRef = React.createRef();
  }

  handleThemeSwitcher = theme => {
    this.setState({ theme });
  };

  handleSizeSwitcher = size => {
    this.setState({ size });
  };

  handlePlayClick = play => {
    this.createAudioAnalizer();
    this.audioRef.current.play();
    // this.soundingAudioRef.current.play();
  };

  createAudioAnalizer() {
    this.audioContext = new (window.AudioContext ||
      window.webkitAudioContext)();
    this.analyser = this.audioContext.createAnalyser();
    this.analyser.smoothingTimeConstant = 0.2;

    this.analyser.fftSize = 512;
    this.dataArray = new Uint8Array(this.analyser.frequencyBinCount);

    this.source = this.audioContext.createMediaElementSource(
      this.audioRef.current,
    );

    this.analyser.connect(this.audioContext.destination);
    this.source.connect(this.analyser);

    setInterval(() => {
      this.analyser.getByteFrequencyData(this.dataArray);
      // const values = [...this.dataArray];

      const subArraySize = Math.floor(this.dataArray.length / 144);
      const subArrays = [];

      for (let i = 0; i < 144; i += 1) {
        subArrays[i] = this.dataArray.slice(
          i * subArraySize,
          i * subArraySize + subArraySize,
        );
      }

      const values = subArrays.map(item => {
        const sum = item.reduce((accumulator, currentValue) => {
          return accumulator + currentValue;
        }, 0);

        return Math.round(sum / item.length);
      });

      this.setState({ values });
    }, 70);
  }

  render() {
    const { theme, values, size } = this.state;
    return (
      <>
        <audio ref={this.audioRef} src={audioFile} />
        {/* <audio ref={this.soundingAudioRef} src={audioFile} /> */}

        <div className="Page">
          <div className="Page__controlElements">
            <Button text="Play" onClick={this.handlePlayClick} />
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
