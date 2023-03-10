class Player {
  constructor(h, w, x, y, xv, yv, type) {
    this.height = h
    this.width = w
    this.x = x
    this.y = y
    this.xv = xv
    this.yv = yv
    this.powerup = type
  }
}
var PlayerOne = new Player(50, 50, 0, 0, 0, 0, 1)