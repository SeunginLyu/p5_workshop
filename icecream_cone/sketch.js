function fillHsluv(h, s, l) {
  var rgb = hsluv.hsluvToRgb([h, s, l]);
  fill(rgb[0] * 255, rgb[1] * 255, rgb[2] * 255);
}

function strokeHsluv(h, s, l) {
  var rgb = hsluv.hsluvToRgb([h, s, l]);
  stroke(rgb[0] * 255, rgb[1] * 255, rgb[2] * 255);
}

function setup() {

  //constraits : one occurnces of triangle, ellipse, rect
  createCanvas(500, 500);
  background(255);

    var baseHue = random(250);
    var change = random(10, 20);
    var num = 8
    push()
    translate(width*0.1, height*0.1)
    for(i = 0; i < 3; i++)
    {
      fillHsluv(baseHue + i*change, 100, 50);
      stroke(255);
      strokeWeight(num/2);
      ellipse(width/10*i, 0, width / num, height / num)
  
    }
    pop()

    fillHsluv(baseHue + 3*change, 100, 50);
    push()
    translate(width*0.2, height*0.17)
    stroke(255);
    strokeWeight(num/8);
    triangle(-(width/num), 0, width/num, 0, 0, width/(num/2));
    pop()

}

function draw() {

}
