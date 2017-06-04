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
  frameRate(1)
}

function draw(){

  var grid = new EasyGrid({
    columns: round(random(4, 10)),
    rows: round(random(4, 10)),
    gutter: 0,
    width: width,
    height: height
  });

  for(var i = 0; i < grid.modules.length; i++) {
    var angle = random(360)
    // rotate(radians(angle))
    var module = grid.modules[i];
    fillHsluv(10, random(50,100), random(10,90))
    rect(module.x, module.y, module.width, module.height)


    texts = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
    fillHsluv(255, 255, 255)
    textSize(sqrt(module.width*module.height)/3)
    text(random(texts), module.x+module.width/2.5, module.y+module.height/1.8)
  }


}
// code as a tool for coming up with designs
