import React from 'react';
import PropTypes from 'prop-types';
import colorGenerator from 'utils/colorGenerator';
import Size from 'utils/Size';

import './Visualizer.scss';

class VisualizerCanvas extends React.Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
    this.blockSize = 50;
  }

  componentDidUpdate(prevProps) {
    const { theme, values, size } = prevProps;

    this.canvasRef.current.width = size.x * this.blockSize;
    this.canvasRef.current.height = size.y * this.blockSize;

    this.drawBars(values, theme);
  }

  drawBars = (values, theme) => {
    const canvas = this.canvasRef.current;

    const horCellsCount = Math.round(canvas.width / this.blockSize);

    const ctx = canvas.getContext('2d');

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    values.forEach((item, index) => {
      const x = index % horCellsCount;
      const y = Math.floor(index / horCellsCount);

      ctx.fillStyle = colorGenerator(theme, item);
      ctx.strokeStyle = 'black';
      ctx.lineWidth = 1;
      ctx.fillRect(
        x * this.blockSize,
        y * this.blockSize,
        this.blockSize,
        this.blockSize,
      );
      ctx.strokeRect(
        x * this.blockSize,
        y * this.blockSize,
        this.blockSize,
        this.blockSize,
      );
    });
  };

  render() {
    return (
      <canvas
        className="canvas"
        ref={this.canvasRef}
        width={800}
        height={450}
      />
    );
  }
}

VisualizerCanvas.propTypes = {
  theme: PropTypes.string.isRequired,
  values: PropTypes.arrayOf(PropTypes.number).isRequired,
  size: PropTypes.instanceOf(Size).isRequired,
};

export default VisualizerCanvas;
