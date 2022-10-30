"use strict";

let trackFile;
let road;
let grass;
let roadFinish;
let car;


function preload(){//does this need to stay in main?
trackFile = loadStrings("track.txt");
road = loadImage("assets/images/road.png");
grass = loadImage("assets/images/grass.png");
roadFinish = loadImage("assets/images/roadFinishLine.png");
car = loadImage("assets/images/car.png");
}


function setup() {
  createCanvas(750, 750);//adjusted this to fit - can adjust tile sizes
  road.resize(tileSize, tileSize);  
  grass.resize(tileSize, tileSize);
  roadFinish.resize(tileSize, tileSize);
  car
  drawTrack();
}

function draw() {
  background(80);
  drawSprites();

}

