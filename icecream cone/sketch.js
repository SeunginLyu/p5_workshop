function setup() {

  //constraits : one occurnces of triangle, ellipse, rect
  createCanvas(500, 500);


  background(255);
  fill(0);
  stroke(255);
  push()
  translate(width*0.4, height*0.3)
  for(i = 0; i < 3; i++)
  {
    ellipse(width/10*i, 0, width / 4, height /4)
    stroke(255);
    strokeWeight(5);
  }
  pop()

  push()
  translate(width*0.5, height*0.40)
  stroke(255);
  strokeWeight(9);
  triangle(-120, 0, 120, 0, 0, 200);
  pop()

}

function draw() {

}
