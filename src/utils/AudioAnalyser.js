import arrayValueAverager from 'utils/arrayValueAverager';

class AudioAnalyser {
  constructor(audio) {
    this.audioContext = new (window.AudioContext ||
      window.webkitAudioContext)();
    this.analyser = this.audioContext.createAnalyser();
    this.analyser.smoothingTimeConstant = 0.2;

    this.analyser.fftSize = 512;
    this.dataArray = new Uint8Array(this.analyser.frequencyBinCount);

    this.source = this.audioContext.createMediaElementSource(audio);

    this.analyser.connect(this.audioContext.destination);
    this.source.connect(this.analyser);
  }

  getByteFrequencyData = size => {
    this.analyser.getByteFrequencyData(this.dataArray);

    const slicedArray = this.dataArray.slice(0, 160);

    return arrayValueAverager(slicedArray, size);
  };
}

export default AudioAnalyser;
