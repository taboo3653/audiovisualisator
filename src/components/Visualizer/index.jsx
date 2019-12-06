import React from "react";
import "./Visualizer.scss";
import Cell from "../Cell";
import Button from "../Button";
import audioFile from "../../assets/audio/song.mp3";

class Visualizer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      values: []
    };
    this.audioRef = React.createRef();
    this.soundingAudioRef = React.createRef();
  }

  createAudioAnalizer() {
    this.audioContext = new (window.AudioContext ||
      window.webkitAudioContext)();
    this.analyser = this.audioContext.createAnalyser();
    this.dataArray = new Uint8Array(this.analyser.frequencyBinCount);

    this.source = this.audioContext.createMediaElementSource(
      this.audioRef.current
    );
    this.source.connect(this.analyser);

    setInterval(() => {
      this.analyser.getByteTimeDomainData(this.dataArray);

      const subArraySize = Math.floor(this.dataArray.length / 144);
      const subArrays = [];

      for (let i = 0; i < 144; i++) {
        subArrays[i] = this.dataArray.slice(
          i * subArraySize,
          i * subArraySize + subArraySize
        );
      }

      const values = subArrays.map(item => {
        const sum = item.reduce((accumulator, currentValue) => {
          return accumulator + currentValue;
        }, 0);

        return Math.round(sum / item.length);
      });

      this.setState({ values });
    }, 100);
  }

  handlePlayClick = () => {
    this.createAudioAnalizer();
    this.audioRef.current.play();
    this.soundingAudioRef.current.play();
  };

  render() {
    const { values } = this.state;

    const cells = values.map((item, index) => {
      return <Cell key={index} value={item} />;
    });
    /* for (let i = 0; i < this.dataArray; i++) {
      cells.push(<Cell key={i} />);
    }*/

    return (
      <>
        <audio ref={this.audioRef} src={audioFile} />
        <audio ref={this.soundingAudioRef} src={audioFile} />

        <Button text="Play" onClick={this.handlePlayClick} />
        <div className="Visualizer" onClick={this.handlePlayClick}>
          {cells}
        </div>
      </>
    );
  }
}

export default Visualizer;
