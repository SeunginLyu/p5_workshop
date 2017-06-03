function setup() {

  //constraits : one occurnces of triangle, ellipse, rect
  createCanvas(500, 500);
  background(255);

  fill('yellow');
  stroke(0)
  strokeWeight(4)

  beginShape();
    vertex(100, 100)
    vertex(300, 100)
    vertex(300, 300)
    bezierVertex(100, 150, 300, 350, 100, 300)

    beginContour();
      vertex(200, 200)
      vertex(250, 150);
      vertex(150, 150);
    endContour(CLOSE);

  endShape(CLOSE); //closes the vertexes
}
