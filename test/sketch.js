function setup() {
  createCanvas(500, 500);

  var rectSize = width / 5;
  var rectX = width - rectSize;
  var rectY = height - rectSize;

  background(255);
  fill(0);

  // word exercise : "split"
  translate(width * 0.60, 0) // moving the origin of canvas
  rotate(radians(105)); //rotating entire canvas with translated orgin
  rect(0, 0, width + 100, width / 30);
}

function draw() {

}
