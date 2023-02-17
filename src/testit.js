class TestIt {
  constructor(init) {
    this._calculatedValue = init;
  }

  get calculatedValue() {
    return this._calculatedValue;
  }

  set calculatedValue(value) {
    this._calculatedValue = value;
  }

  add(value) {
    this._calculatedValue = this._calculatedValue + value;
    return this._calculatedValue;
  }

  subtract(value) {
    this._calculatedValue = this._calculatedValue - value;
    return this._calculatedValue;
  }

  multiplyBy(value) {
    this._calculatedValue = this._calculatedValue * value;
    return this._calculatedValue;
  }

  divideBy(value) {
    this._calculatedValue = this._calculatedValue / value;
    return this._calculatedValue;
  }
}

export { TestIt };
