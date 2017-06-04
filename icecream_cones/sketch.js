var NUM = 8
var ROW = 5
var COL = 5
var COLOR_NUMS = 10


function fillHsluv(h, s, l) {
  var rgb = hsluv.hsluvToRgb([h, s, l]);
  fill(rgb[0] * 255, rgb[1] * 255, rgb[2] * 255);
}


function strokeHsluv(h, s, l) {
  var rgb = hsluv.hsluvToRgb([h, s, l]);
  stroke(rgb[0] * 255, rgb[1] * 255, rgb[2] * 255);
}


function setup() {

  //constraits : one occureces of triangle, ellipse, rect
  createCanvas(500, 500);
  background(255);
  rand_index = [int(random(ROW)), int(random(COL))]
  colors_list = generate_colors(COLOR_NUMS);

  for(row = 0; row < ROW; row++){
    translate(0, height*0.15)
    push()
    for(col = 0; col < COL; col++){
      translate(width*0.15, 0)
      if (row == rand_index[0] && col == rand_index[1]) {
         make_ice_cream(col, row, (0, 0, 0))
      }
      else {
        rand_color = random(colors_list)
        make_ice_cream(col, row, rand_color)
      }
    }
    pop()
  }
}


function generate_colors(color_nums){
  var colors  = []
  for (var i = 0; i < color_nums; i++) {
  // put a color into the colors array
    var rand_color = []
    var hue = 10
    var sat = random(30, 100)
    var lig = random(30, 100)
    rand_color.push(hue)
    rand_color.push(sat)
    rand_color.push(lig)
    colors.push(rand_color)
  }

  return colors
}


function make_ice_cream(row, col, color){
  var points = []
  for(i = 0; i < 3; i++)
  {
    fillHsluv(color[0], color[1], color[2]);
    stroke(255);
    strokeWeight(3);
    var x = 0 + (width/25)*i
    var y = 0
    ellipse(x, y, 30, 30)
    pos = createVector(x, y+15)
    points.push(pos)
  }
  triangle(points[0].x, points[0].y, points[2].x, points[2].y,
  points[1].x, (NUM/2)*points[1].y)
}
