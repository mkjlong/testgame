let players = [[],[]]
class Player {
  constructor(width, height, x, y, xv, yv) {
    this.setWidth(width)
    this.setHeight(height)
    this.setXpos(x)
    this.setYpos(y)
    this.xv = xv
    this.yv = yv
  }

  setWidth(width){
    setCSSVariable("width", width + "px")
    this.width = width;
  }

  setHeight(height){
    setCSSVariable("height", height + "px")
    this.height = height;
  }

  setXpos(x){
    setCSSVariable("x",x + "px")
    this.x=x
  }
  
  setYpos(y){
    setCSSVariable("y",y + "px")
    this.y=y
  }
}