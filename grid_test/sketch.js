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
  noStroke();
  var grid = new EasyGrid({
    columns: 10,
    rows: 10,
    gutter: 2,
    width: width,
    height: height
  });

  for(var i = 0; i < grid.modules.length; i++) {
    var module = grid.modules[i];
    fillHsluv(10, random(50,100), random(100))
    rect(module.x, module.y, module.width, module.height)
  }
}

function draw(){

}
