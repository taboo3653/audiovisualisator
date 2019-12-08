/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';
import Switcher from 'components/Switcher';
import Visulizer from 'components/Visualizer';
import VisulizerCanvas from 'components/VisualizerCanvas';

import PlayToggler from 'components/PlayToggler';
import { ColorEnum, SizeEnum, OutputMethodEnum } from 'utils/values';
import AudioAnalyser from 'utils/AudioAnalyser';

import audioFile from '../../assets/audio/song2.mp3';
import './Page.scss';

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      outputMethod: OutputMethodEnum.CANVAS,
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

  handleOutputMethodSwitcher = outputMethod => {
    this.setState({ outputMethod });
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
      const { size } = this.state;

      const values = this.audioAnalyser.getByteFrequencyData(
        size.getCount(),
      );

      this.setState({ values });
    }, 70);
  };

  pause = () => {
    this.audioRef.current.pause();
    clearInterval(this.interval);
  };

  render() {
    const {
      theme,
      values,
      size,
      isPlayed,
      outputMethod,
    } = this.state;

    let visualizer;

    switch (outputMethod) {
      case OutputMethodEnum.CANVAS:
        visualizer = (
          <VisulizerCanvas
            theme={theme}
            values={values}
            size={size}
          />
        );
        break;
      case OutputMethodEnum.DIV:
        visualizer = (
          <Visulizer
            theme={theme}
            values={values}
            size={size.toString()}
          />
        );
        break;
      default:
        visualizer = (
          <VisulizerCanvas
            theme={theme}
            values={values}
            size={size}
          />
        );
        break;
    }

    return (
      <>
        <audio ref={this.audioRef} src={audioFile} />

        <div className="Page">
          <div className="Page__controlElements">
            <PlayToggler
              handlePlayClick={this.handlePlayClick}
              isPlayed={isPlayed}
            />
            <Switcher
              active={outputMethod}
              values={[OutputMethodEnum.CANVAS, OutputMethodEnum.DIV]}
              handleSwitcher={this.handleOutputMethodSwitcher}
            />
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
              values={[ColorEnum.RED, ColorEnum.BLUE]}
              handleSwitcher={this.handleThemeSwitcher}
            />
          </div>
          <div className="Page__field">{visualizer}</div>
        </div>
      </>
    );
  }
}

export default Page;
