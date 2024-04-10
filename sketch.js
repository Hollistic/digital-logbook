function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER)
  textAlign(CENTER)
  rectMode(CENTER)
}

function lineUp(){
  width = windowWidth
  height = windowHeight
}

function windowResized(){
  lineUp()
}

function draw() {
  background(220);
  
  square(width/2, height/2, sqrt(width*height)/2)

}
