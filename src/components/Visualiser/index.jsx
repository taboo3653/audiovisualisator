import React from "react";
import "./Visualiser.scss";
import Cell from "../Cell";
import audioFile from "../../assets/audio/song.mp3";

class Visualiser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      level: 0
    };
    this.audioRef = React.createRef();
  }

  createFilter = frequency => {
    var filter = this.audioContext.createBiquadFilter();

    filter.type = "peaking"; // тип фильтра
    filter.frequency.value = frequency; // частота
    filter.Q.value = 1; // Q-factor
    filter.gain.value = 0;

    return filter;
  };

  createFilters = () => {
    const frequencies = [
      60,
      170,
      310,
      600,
      1000,
      3000,
      6000,
      12000,
      14000,
      16000
    ];
    let filters;

    // создаем фильтры
    filters = frequencies.map(this.createFilter);

    // цепляем их последовательно.
    // Каждый фильтр, кроме первого, соединяется с предыдущим.
    // Удачно, что reduce без начального значения как раз пропускает первый элемент.
    filters.reduce(function(prev, curr) {
      prev.connect(curr);
      return curr;
    });

    return filters;
  };

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
      // console.log(this.dataArray);
      //this.setState({ level: this.state.level + 1 });
    }, 1000);
  }

  render() {
    const cells = [];

    for (let i = 0; i < 144; i++) {
      cells.push(<Cell key={i} />);
    }

    return (
      <div>
        <audio ref={this.audioRef} src={audioFile} controls />
      </div>
      /*
      <div
        className="Visualiser"
      >
        {cells}
      </div>*/
    );
  }
}

export default Visualiser;
