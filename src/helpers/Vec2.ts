export class Vec2 {
  x: number;
  y: number;

  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

  get len() {
    return Math.hypot(this.x, this.y);
  }

  static dist(v: Vec2, w: Vec2) {
    return Math.hypot(v.x - w.x, v.y - w.y);
  }

  static dist2(v: Vec2, w: Vec2) {
    return Math.pow(v.x - w.x, 2) + Math.pow(v.y - w.y, 2);
  }

  distTo(v: Vec2) {
    return Math.hypot(this.x - v.x, this.y - v.y);
  }

  dist2To(v: Vec2) {
    return Math.pow(this.x - v.x, 2) + Math.pow(this.y - v.y, 2);
  }

  add(x: number, y: number) {
    this.x += x;
    this.y += y;

    return this;
  }

  addVec(v: Vec2) {
    this.x += v.x;
    this.y += v.y;

    return this;
  }

  sub(x: number, y: number) {
    this.x -= x;
    this.y -= y;

    return this;
  }

  subVec(v: Vec2) {
    this.x -= v.x;
    this.y -= v.y;

    return this;
  }

  mult(value: number) {
    this.x *= value;
    this.y *= value;

    return this;
  }

  div(value: number) {
    if (value === 0) throw new Error("Division by zero not defined");

    this.x /= value;
    this.y /= value;

    return this;
  }

  scale(value: number) {
    if (this.isZeroVector()) throw new Error("Cannot scale the zero vector");

    const factor = value / this.len;

    this.mult(factor);

    return this;
  }

  norm() {
    this.div(this.len);

    return this;
  }

  invert() {
    this.mult(-1);

    return this;
  }

  copy() {
    return new Vec2(this.x, this.y);
  }

  isZeroVector() {
    return Vec2.isZeroVector(this);
  }

  static isZeroVector(v: Vec2) {
    return v.x === 0 && v.y === 0;
  }
}
