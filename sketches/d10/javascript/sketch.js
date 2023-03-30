function setup() {
  createCanvas(400, 400);
  background(220);
  noFill();
  strokeWeight(5);
  stroke(255);
  translate(width/2, height/2); 


  ellipse(0, 0, 200);


  beginShape();
  vertex(-50, -10);
  vertex(-50, 10);
  vertex(-10, 10);
  vertex(-10, 50);
  vertex(10, 50);
  vertex(10, 10);
  vertex(50, 10);
  vertex(50, -10);
  vertex(10, -10);
  vertex(10, -50);
  vertex(-10, -50);
  vertex(-10, -10);
  endShape(CLOSE);
}

function draw() {

}