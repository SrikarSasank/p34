const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bg_img;
var canvas;
var bullets = [];
var angle;
var stall, stall_img;
var engine, world;
var angle = 0;

function preload() {
  bg_img = loadImage("./Assets/bg.png");
  stall_img = loadImage("./Assets/stall.png");
  gunImg = loadImage("./Assets/gun.png");
}

function setup() {
  canvas = createCanvas(1800, 995);

  angleMode(DEGREES)
  angle = 15

  stall = createSprite(350, 607);
  stall.addImage(stall_img);
  stall.scale = 4.1

   gun = createSprite(1100,500,100,100)
   gun.addImage(gunImg)
   gun.scale = 0.2
   gun.rotate = 5

  
}

function draw() {
  image(bg_img, 0, 0, width, height);
  gun.display() 
  keyPressed()
   
  drawSprites();
  Engine.update(engine);
}



function keyPressed() {
  if (keyPressed === UP_ARROW) {
    angle += 10
    gun.rotation(angle)
    console.log("WORKING")
  } 
  if (keyPressed === DOWN_ARROW) {
    angle -= 10
  }
}