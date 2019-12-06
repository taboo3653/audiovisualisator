import React from "react";
import "./Visualiser.scss";
import Cell from "../Cell";
import audioFile from "../../assets/audio/song.mp3";

class Visualiser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      values: []
    };
    this.audioRef = React.createRef();
  }

  componentDidMount() {
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
      /*
        let sum = 0;
        const startElement = i * elementsCount;
        const lastElement =
          (i + 1) * elementsCount - 1 < 1024
            ? (i + 1) * elementsCount - 1
            : 1023;

        for (let j = startElement; j < lastElement; j++) {
          sum += this.dataArray[i];
        }

        const average = sum / elementsCount;

        values.push(average);*/
      //= (this.dataArray.length / 144).ceil;
      //console.log(values);
      // console.log(this.audioRef.current.currentTime);
      //this.setState({ level: this.state.level + 1 });
    }, 200);
  }

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
        <div>
          <audio ref={this.audioRef} src={audioFile} autoPlay />
          <audio src={audioFile} autoPlay />
        </div>

        <div className="Visualiser">{cells}</div>
      </>
    );
  }
}

export default Visualiser;
