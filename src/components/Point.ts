export default class Point {
  x: number = 0
  y: number = 0
  constructor (x: number, y: number) {
    this.x = x
    this.y = y
  }
  toString (): string {
    return [this.x, this.y].join(',')
  }
  toArray (): Array<number> {
    return [this.x, this.y]
  }
  add (p: Point): Point {
    return new Point(this.x + p.x, this.y + p.y)
  }
  subtract (p: Point): Point {
    return new Point(this.x - p.x, this.y - p.y)
  }
  abs (): Point {
    return new Point(Math.abs(this.x), Math.abs(this.y))
  }
  multiply (v: number): Point {
    this.x *= v
    this.y *= v
    return this
  }
}
