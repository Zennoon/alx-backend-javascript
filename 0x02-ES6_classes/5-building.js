export default class Building {
  evacuationWarningMessage() {}

  constructor(sqft) {
    this.sqft = sqft;

    if (!(this.constructor.prototype.hasOwnProperty('evacuationWarningMessage'))) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(val) {
    this._sqft = val;
  }
}
