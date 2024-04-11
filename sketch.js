let changered = false;
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
function isBetween(lowerX, lowerY, upperX, upperY){
  return mouseX > lowerX && mouseX < upperX && mouseY > lowerY && mouseY < upperY
}
function draw() {
  background(220);
  textSize(50);
  rect(width/2, height*3/8, width/2, height/4);
  text("hello vro", width/2, height*3.25/8);
  rect(width/2, height*5/8, width/2, height/4);
  text("hello bro", width/2, height*5.25/8);

  text("")


}
function mouseClicked(){
  print('yo')
  if (isBetween(width/4, height/4, width*3/4, height/2)){
    changered = true;
    print("hello vro");
  }
  if (isBetween(width/4, height/2, width*3/4, height*3/4)){
    changered = true;
    print("hello bro");
  }
} 