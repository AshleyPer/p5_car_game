"use strict";
let track = new newTrack();
let car;
let carSprite;
let carScale;
let tileY = 25;
let tileX = 25;
let tileSize = 50;


function preload(){//does this need to stay in main?
  track.loadStuff();
  car = loadImage("assets/images/car.png");
}


function setup() {
  createCanvas(750, 750);//adjusted this to fit - can adjust tile sizes
  carScale = tileSize / 190;
  track.update();

  carSprite = createSprite(tileX, tileY, tileSize, tileSize);
  carSprite.addImage(car);
  carSprite.scale = carScale
  carSprite.rotation = 270;

}

function draw() {
  background(80);
  drawSprites();

}

