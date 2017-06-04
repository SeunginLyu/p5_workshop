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
  strokeWeight(3)
  frameRate(2)
  // //  drawCircle(width/2, height/2, 400)
  // max_level = 10
  // drawRect(0, 0, width, height, max_level)
}


function draw(){
  strokeWeight(3)
  //  drawCircle(width/2, height/2, 400)
  max_level = 10
  drawRect(0, 0, width, height, max_level)
}


function drawCircle(x, y, s){
  fill(random(0, 200))
  ellipse(x, y, s, s)
  if(s > 0) {
    drawCircle(x, y, s-10)
  }
}


function drawRect(x, y, w, h, level){
  hue = 10
  fillHsluv(hue, 70, 20+level*10)
  rect(x, y, w, h);

  var splitWidth = random(1) > 0.5;
  var split = random(0.3, 0.7);
  if(level > 0){
    if(splitWidth && w > 10){
      drawRect(x, y, w * split, h, --level)
      drawRect(w * split, y, (1 - split) * w, h, --level)
    }
    else if(h > 10){
      level--;
      drawRect(x, y, w, h * split, --level);
      drawRect(x, y + (h * split), w, h * (1 - split), --level);
    }
  }
}
