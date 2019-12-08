class Size {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  toString() {
    return `${this.x}x${this.y}`;
  }

  getCount() {
    return this.x * this.y;
  }
}

export default Size;
