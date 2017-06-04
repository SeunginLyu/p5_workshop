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
  noStroke();

  // First we must load the font file
  opentype.load('Roboto-Regular.ttf', function(err, font) {

    var path = font.getPath("ABC", 0, 0, 190);
    var path2 = font.getPath("ABC", 0, 0, 100)
    translate(100, height/2);

    // Now loop through the commands in the path.
    for(var i = 0; i < path.commands.length; i++) {

      // Get the specific command
      var cmd = path.commands[i];
      fillHsluv(10, random(50,100), random(10,90))
      rect(cmd.x, cmd.y, width/70, height/70)

    }
    for (var i = 0; i < path2.commands.length; i++) {
      var cmd2 = path2.commands[i]
      fillHsluv(200, random(50,100), random(10,90))
      rect(cmd2.x+30, cmd2.y+150, width/100, height/100)
    }
  });
}

function draw(){

}
// code as a tool for coming up with designs
