export class Vec2 {
  private x: number;
  private y: number;

  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

  len() {
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

  get copy() {
    return new Vec2(this.x, this.y);
  }
}
