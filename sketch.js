var stars, starSpeed;
// var ship;

/* images */
var planetOne, planetTwo, bg;

var planets;

var translateLeft, translateRight;

function setup() {
  createCanvas(1200, 600);
  
  // ship = new Ship();
  
  stars = [];
  for (var i = 0; i < 800; i++) {
    stars[i] = new Star();
  }
  
  starSpeed = 7;
  
  translateLeft = width / 2;
  translateRight = height / 2;
  
  planetOne = loadImage("blue.png");
  planetTwo = loadImage("yellow.png");
  bg = loadImage("background.png");
}

function draw() {
  background(0);
  
  if(keyIsDown(65)) {
    translateLeft = width / 4;
  } else if(keyIsDown(68)) {
    translateLeft = width / 4 * 3;
  } else {
    translateLeft = width / 2;
  }
  
  translate(translateLeft, translateRight);
  
  if (keyIsDown(87) || touchIsDown) {
    if (starSpeed < 21) {
      starSpeed += .5;
    } 
  } else {
    if(starSpeed < 1) {
      starSpeed = 7;
    } else {
      starSpeed--;
    }
  }
  
  for (var i = 0; i < stars.length; i++) {
    stars[i].update();
    stars[i].show();
  }
  
  // ship.update();
  // ship.show();
}

/* Create some STAAAARS */
function Star() {
  this.x = random(-width, width);
  this.y = random(-height, height);
  this.z = random(width);

  this.update = function() {
    this.z = this.z - starSpeed;
    if(this.z < 1) {
      this.z = width;
      this.x = random(-width, width);
      this.y = random(-height, height);
    }
  }

  this.show = function() {
    fill(255);
    noStroke();

    var sx = map(this.x / this.z, 0, 1, 0, width);
    var sy = map(this.y / this.z, 0, 1, 0, height);

    var r = map(this.z, 0, width, 16, 0);
    ellipse(sx, sy, r, r);
  }
}

//   this.show = function() {
//     fill(255);
//     noStroke();

//     var sx = map(this.x / this.z, 0, 1, 0, width);
//     var sy = map(this.y / this.z, 0, 1, 0, height);

//     var r = map(this.z, 0, width, 16, 0);
//     ellipse(sx, sy, r, r);
//   }
// }

/* let's make a SHIIIP */
// function Ship() {
//   this.x = width / 2;
//   this.y = height / 4;
//   this.z = height - 50;
//   this.width = 100;
//   this.height = 150;
  
//   this.update = function() {
    
//   }
  
//   this.show = function() {
//     fill(255);
//     noStroke();
    
//     rect(this.x, this.y, this.width, this.height);
//   }
// }