class Figure3D {
  constructor(name) {
    this.name = name;
  }

  set name(name) {
    if (typeof name !== 'string') {
      throw new TypeError('Name of figure3D must be a string');
    }
    this._name = name;
  }

  get name() {
    return this._name;
  }

  isPositiveNumber(value) {
    return typeof value === 'number' && value > 0;
  }

  getVolume() {}
}

// Ball
class Ball extends Figure3D {
  constructor(radius) {
    super('Ball');
    this.radius = radius;
  }

  set radius(radius) {
    if (this.isPositiveNumber(radius)) {
      this._radius = radius;
    } else {
      throw Error('Radius must be a number or/and >=0');
    }
  }

  get radius() {
    return this._radius;
  }

  getVolume() {
    return (4 / 3) * Math.PI * this._radius * this._radius * this.radius;
  }
}

// Cylinder
class Cylinder extends Figure3D {
  constructor(radius, height) {
    super('Cylinder');
    this.radius = radius;
    this.height = height;
  }

  set radius(radius) {
    if (this.isPositiveNumber(radius)) {
      this._radius = radius;
    } else {
      throw Error('Radius must be a number and >=0');
    }
  }

  get radius() {
    return this._radius;
  }

  set height(height) {
    if (this.isPositiveNumber(height)) {
      this._height = height;
    } else {
      throw Error('Height must be a number and >=0');
    }
  }

  get height() {
    return this._height;
  }

  getVolume() {
    return 2 * Math.PI * this._radius * this._height;
  }
}

// Cube
class Cube extends Figure3D {
  constructor(side) {
    super('Cube');
    this.side = side;
  }

  set side(side) {
    if (this.isPositiveNumber(side)) {
      this._side = side;
    } else {
      throw Error('Side must be a number and >=0');
    }
  }

  get side() {
    return this._side;
  }

  getVolume() {
    return this._side * this._side * this.side;
  }
}


// Figures
const ball = new Ball(10);
console.log(ball.getVolume());

const cylinder = new Cylinder(10, 10);
console.log(cylinder.getVolume());

const cube = new Cube(10);
console.log(cube.getVolume());