function fillHsluv(h, s, l) {
  var rgb = hsluv.hsluvToRgb([h, s, l]);
  fill(rgb[0] * 255, rgb[1] * 255, rgb[2] * 255);
}

function strokeHsluv(h, s, l) {
  var rgb = hsluv.hsluvToRgb([h, s, l]);
  stroke(rgb[0] * 255, rgb[1] * 255, rgb[2] * 255);
}

function setup() {

  createCanvas(500, 500);
  background(255)
  noStroke();
  translate(0, 20)
  for(var i = 0; i < 10; i++) {
    fillHsluv(i*10, 50*i, 50);
    rect(i * 50, 0, 50, 100);
  }

  strokeWeight(3)
  translate(0, height/2)
  for(var i = 0; i < 7; i++) {
    fillHsluv(i*30, 50*i, 50);
    strokeHsluv(i*30, 50*i, 75)
    ellipse(40 + i * 70, 0, 50, 50);
  }

  var baseHue = random(100, 160);
  var change = random(10, 100);

  translate(0, height/4)
  for(var i = 0; i < 7; i++) {
    fillHsluv(baseHue + i*change, 100, 50);
    strokeHsluv(baseHue + i*change, 100, 25)
    ellipse(40 + i * 70, 0, 50, 50);
  }
}
