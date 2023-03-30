function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);


  strokeWeight(10);
  line(200, 50, 200, 350);


  drawFlower(150, 100);
  drawFlower(250, 100);
  drawFlower(150, 300);
  drawFlower(250, 300);
}

function drawFlower(x, y) {

  strokeWeight(5);
  stroke(0, 128, 0);
  line(x, y, x, y + 100);


  noStroke();
  fill(255, 204, 0);
  ellipse(x - 25, y, 50, 50);
  ellipse(x + 25, y, 50, 50);
  ellipse(x, y - 25, 50, 50);
  ellipse(x, y + 25, 50, 50);

  fill(255, 0, 0);
  ellipse(x, y, 25, 25);
}
