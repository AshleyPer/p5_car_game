"use strict";
let track = new newTrack();
let car;
let carSprite;
let carScale;
let tileY = 25;
let tileX = 25;
let tileSize = 50;
let angle = 270;
let vel = 0;


function preload(){
  track.loadStuff();
  car = loadImage("assets/images/car.png");
}


function setup() {
  createCanvas(750, 750);//adjusted this to fit - can adjust tile sizes
  
  track.update();
  console.log(track)
  createCar();
}

function draw() {
  background(80);
  drawSprites();
  carOffTrack();

}

function keyPressed(){

  if (keyCode == UP_ARROW){
    if(vel<=5){//change max speed here
    carSprite.setSpeed(vel + 0.1 ,angle);
    vel += 0.1;
    }
    
  }
  if (keyCode == DOWN_ARROW){
    if(vel >0.1){
    carSprite.setSpeed(vel - 0.1 ,angle);
    vel -= 0.1;
    }
    else {
      carSprite.setSpeed(0,angle); //takes it all the way to zero
    }
  }
  if (keyCode == LEFT_ARROW){
    carSprite.setSpeed(vel,angle - 15);//10 OR 15 GOOD
    angle-=15;
  }
  if (keyCode == RIGHT_ARROW){
    carSprite.setSpeed(vel,angle +15);
    angle  += 15;
  }
  return false;
}

function createCar(){
  carScale = tileSize / 190;
  carSprite = createSprite(startX, startY, tileSize, tileSize);
  carSprite.addImage(car);
  carSprite.scale = carScale
  //carSprite.rotation = 270;
  //location road tile car needs to face (check up first then clockwise)
  

  carSprite.setSpeed(0.000001,270);
  carSprite.rotateToDirection = true;
  
  carSprite.setCollider("circle",0,0,6);
  
}

function carOffTrack(){//car back to start facing road tile
  if(carSprite.collide(grassGroup)){
    carSprite.position.x = startX;
    carSprite.position.y = startY;
    carSprite.setSpeed(0.000001,270);
    vel = 0;
  }
}