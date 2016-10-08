var stars, Speed;
// var ship;

/* images */
var planetImg_01, planetImg_02, backgroundImg;

var planets;

/* Set view window for correct effect */
var translateLeft, translateRight;

function setup() {
  createCanvas(1200, 600);
  
  //Create some Stars
  stars = [];
  for (var i = 0; i < 800; i++) {
    stars[i] = new Star();
  }
  
  //set speed for objects in space
  Speed = 7;
  
  translateLeft = width / 2;
  translateRight = height / 2;
  
  planetOne = loadImage("blue.png");
  planetTwo = loadImage("yellow.png");
  bg = loadImage("background.png");
}

function draw() {
  background(0);
  translate(translateLeft, translateRight);
  
  if (keyIsDown(87) || touchIsDown) {
    if (Speed < 21) {
      Speed += .5;
    } 
  } else {
    if(Speed < 1) {
      Speed = 7;
    } else {
      Speed--;
    }
  }
  
  if(keyIsDown(65)) {
    translateLeft = width / 4;
  } else if(keyIsDown(68)) {
    translateLeft = width / 4 * 3;
  } else {
    translateLeft = width / 2;
  }
  
  for (var i = 0; i < stars.length; i++) {
    stars[i].update();
    stars[i].show();
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