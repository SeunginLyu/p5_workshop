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
  background(255);
  colorMode(HSL);
  noStroke();

  var colors = [];

  // create colors
  for (var i = 0; i < 5; i++) {
  // put a color into the colors array
    var hue = random(0, 20)
    var sat = random(50, 100)
    var lig = random(0, 100)
    colors.push(color(hue, sat, lig))
  }

  // draw shapes
  for (var i = 0; i < 100; i++) {
    fill(random(colors))
    ellipse(random(width), random(height), 50, 50)
  }
}
