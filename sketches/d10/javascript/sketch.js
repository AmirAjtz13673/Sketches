let x, y; // variables to store the position of the letter
let dragging = false; // variable to track if the user is dragging the letter

function setup() {
  createCanvas(1000, 1000);
  x = width / 2; // center the letter horizontally
  y = height / 2; // center the letter vertically
}

function draw() {
  background(0); // black background
  textSize(500); // large font size
  fill(255); // white text color
  textAlign(CENTER, CENTER); // center the text horizontally and vertically
  text("I", x, y); // draw the letter at the current position
}

function mousePressed() {
  // check if the mouse is over the letter
  let d = dist(mouseX, mouseY, x, y);
  if (d < 50) {
    dragging = true; // start dragging
  }
}

function mouseReleased() {
  dragging = false; // stop dragging
}

function mouseDragged() {
  if (dragging) {
    x = mouseX; // update the position of the letter
    y = mouseY;
  }
}
