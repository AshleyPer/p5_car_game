let carX;
let carY;
//will use this sketch for the track
class newTrack {
  constructor(x, y) {
    this.x = x;
    this.y = y;

    this.tileY = 25;
    this.tileX = 25;
    this.tileSize = 50;

    this.arrayIndex1;
    this.arrayIndex2;
    this.grassGroup;
    this.roadGroup;
    this.trackFile;
    this.road;
    this.grass;
    this.roadFinish;
  }

  loadStuff() {
    this.trackFile = loadStrings("track.txt");
    this.road = loadImage("assets/images/road.png");
    this.grass = loadImage("assets/images/grass.png");
    this.roadFinish = loadImage("assets/images/roadFinishLine.png");
  }

  makeGrass(x, y) {
    let tempGrass = createSprite(x, y, this.tileSize, this.tileSize);
    tempGrass.addImage(this.grass);
    tempGrass.immovable = true;
    this.grassGroup.add(tempGrass);
  }

  makeRoad(x, y) {
    let tempRoad = createSprite(x, y, this.tileSize, this.tileSize);
    tempRoad.addImage(this.road);
    tempRoad.immovable = true;
    this.roadGroup.add(tempRoad);
  }

  makeFinish(x, y) {
    let tempFinish = createSprite(x, y, this.tileSize, this.tileSize);
    tempFinish.addImage(this.roadFinish);
    tempFinish.immovable = true;
  }

  update() {
    this.road.resize(this.tileSize, this.tileSize);
    this.grass.resize(this.tileSize, this.tileSize);
    this.roadFinish.resize(this.tileSize, this.tileSize);
    this.grassGroup = new Group();
    this.roadGroup = new Group();
    for (let i = 0; i < this.trackFile.length; i++) {
      let trackTypes = splitTokens(this.trackFile[i], ' ');

      for (let z = 0; z < trackTypes.length; z++) {
        if (trackTypes[z] == 0) {
          this.makeGrass(this.tileX, this.tileY);

        }
        else if (trackTypes[z] == 1) {
          this.makeRoad(this.tileX, this.tileY);
        }
        else if (trackTypes[z] == 2) {
          this.makeFinish(this.tileX,this.tileY);

          carX = this.tileX;
          carY = this.tileY;

          this.arrayIndex1 = i;
          this.arrayIndex2 = z;
        }
        this.tileX += this.tileSize;
      }
      this.tileX = 25;
      this.tileY += this.tileSize;
    }
  }
}