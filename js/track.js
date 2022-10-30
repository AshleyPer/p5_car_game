"use strict";
//will use this sketch for the track

let tileX = 25;
let tileY = 25;
let tileSize = 50;
let startX;
let startY;
let arrayIndex1;
let arrayIndex2;
let grassGroup;
let roadGroup;
let carSprite;
let carScale = tileSize / 190


function drawTrack(){//convert to class
  grassGroup = new Group();
  roadGroup = new Group();
  for(let i = 0; i < trackFile.length; i++){
    let trackTypes = splitTokens(trackFile[i], ' ');

    for (let z = 0; z<trackTypes.length; z++){
      if(trackTypes[z] == 0){
        trackTypes[z] = createSprite(tileX,tileY,tileSize,tileSize);
        trackTypes[z].addImage(grass);
        trackTypes[z].immovable = true;
        grassGroup.add(trackTypes[z]);
      }
      else if (trackTypes[z] == 1){
        trackTypes[z] = createSprite(tileX,tileY,tileSize,tileSize);
        trackTypes[z].addImage(road);
        trackTypes[z].immovable = true;
        roadGroup.add(trackTypes[z]);
      }
      else if (trackTypes[z] == 2){
        trackTypes[z] = createSprite(tileX,tileY,tileSize,tileSize);
        trackTypes[z].addImage(roadFinish);
        carSprite = createSprite(tileX,tileY,tileSize,tileSize);
        carSprite.addImage(car);
        carSprite.scale = carScale
        carSprite.rotation = 270;
        trackTypes[z].immovable = true;
        startX = tileX;
        startY = tileY;
        arrayIndex1 = i;
        arrayIndex2 = z;
      }
      tileX += tileSize;
    }
    tileX = 25;
    tileY += tileSize;
        
      
    
  }
}