function setup() {

  createCanvas(500, 500);
  background(255);

  fill(0)
  stroke(0)
  strokeWeight(4)

  var numShapes = 10
  var numVertices = 50
  var spacing = 360 / numVertices
  var radius = 100
  for(var n = 1; n <= numShapes; n++){
    translate(100 + random(100)-random(100), 100 + random(100)-random(100))
    beginShape()
      for(var i = 0; i < numVertices; i++){
        if (i % 2 == 0)
        {
          var x = cos(radians(i * spacing)) * radius
          var y = sin(radians(i * spacing)) * radius
          vertex(x, y);
        }
        else
        {
          var x = cos(radians(i * spacing)) * 0.5
          var y = sin(radians(i * spacing)) * 0.5
          vertex(x, y);
        }
      }
    endShape(CLOSE);
  }

}
