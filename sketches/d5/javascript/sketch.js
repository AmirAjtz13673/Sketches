let myFont;
let blockWidth = 30;  
let blockHeight = 100;



function setup() {
  createCanvas(1000, 1000);
  background(0);
}

function draw() {


  stroke(255);
  strokeWeight(4);
  
  /*textSize(500);
  text("I", x, y);*/
  

  for (let i = 0; i < 0.1; i++) {

    let startX = random(100, 900);
    let startY = random(100, 900);
    let endX = random(100, 900);
    let endY = random(100, 900);
    

    line(startX, startY, endX, endY);
  }

  strokeWeight(8);
  line(500, 100, 500, 900);
}
