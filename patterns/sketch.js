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

  // aperiodic patterns
  var size = 100;

  for (var i = 0; i < 20; i++) {
    for (var j = 0; j < 20; j++) {
      var hue = i * 10
      push()
      translate(i * size, j * size);
      fill(hue, 100, 50);
      rect(0, 0, 100, 100);

      fill(hue+10*j, 100, 70);
      ellipse(size/2, size/2, size * 0.8, size * 0.8)

      fill(hue-10*j, 100, 50)
      rect(size/2.8, size/2.8, size * 0.3, size * 0.3)

      fill(hue-5*j, 50+i, 50+j)
      rect(size/2.8, size/2.8, size * 0.1, size * 0.1)
      pop()
    }
  }
}
