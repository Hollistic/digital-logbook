let changered = false;
let mainMenu = true;
let input;
let registerMenu = false;
// let ws = new WebSocket("");
function preload() {
// freaky = loadFont("assets/lastninja.ttf")
freakyimg = loadImage("assets/freakyah.png")
freakyfont = loadFont("assets/papyrus.ttf")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER)
  textAlign(CENTER)
  rectMode(CENTER)
  textFont(freakyfont)
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
  if (mainMenu){
    drawMainMenu();
  }
  else if (registerMenu){
    drawRegisterMenu();
  }
  // image(freakyimg, width/2, height/2)

}
function mouseClicked(){
  print('yo')
  if (mainMenu){
    if (isBetween(width/4, height/4, width*3/4, height/2)){
      changered = true;
      print("hello vro");
      mainMenu = false;
      registerMenu = true;
      makeButton(width/2, height*3/8);

    }
    if (isBetween(width/4, height/2, width*3/4, height*3/4)){
      changered = true;
      print("hello bro");
    }
}
} 

function drawMainMenu(){
  rect(width/2, height*3/8, width/2, height/4);
  text("hello vro", width/2, height*3.25/8);
  rect(width/2, height*5/8, width/2, height/4);
  text("hello bro", width/2, height*5.25/8);
  textSize(125);
  text("get freaky vro", width/2, height/6.75);
}
function drawRegisterMenu(){

}
class Button{
  constructor(x, y, txt){
    this.x = x;
    this.y = y;
    this.size = size;
    this.txt = txt;
    this.button = createButton(txt)
    this.button.position(x,y);
    this.button.mousePressed(message())
  }
}
function makeButton(buttonWidth, buttonHeight){
  input = createInput();
  input.position(buttonWidth, buttonHeight);
  button = createButton("ok vro");
  button.position(input.x + input.width*1.2, height/2);
  button.mousePressed(message);

}
function message() {
  print("hello" + input.value() +  "vro")
}

function sendData(Type, data) {
  // sends data to the server; contains a message and a type, used to tell the server what to do with the received message data
  let newMessage = { messageType: Type, data: data };
  let newMessageString = JSON.stringify(newMessage);

  ws.send(newMessageString);

  print("message should be sent...");
}