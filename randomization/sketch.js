function fillHsluv(h, s, l) {
  var rgb = hsluv.hsluvToRgb([h, s, l]);
  fill(rgb[0] * 255, rgb[1] * 255, rgb[2] * 255);
}

function strokeHsluv(h, s, l) {
  var rgb = hsluv.hsluvToRgb([h, s, l]);
  stroke(rgb[0] * 255, rgb[1] * 255, rgb[2] * 255);
}


function setup() {

  createCanvas(600, 600);
  background(255);
  noStroke();
  frameRate(2);

}

function draw() {
  var showRect = random(100) > 50;
  if(showRect) {
    fill(0);
  }
  else{
    fill(255, 0, 0)
  }
  rect(0, 100, 100, 100)
}
