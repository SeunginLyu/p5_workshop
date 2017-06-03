function setup() {

  createCanvas(500, 500);
  colorMode(HSL)
  background(255)
  noStroke();
  for(var i = 0; i < 10; i++) {
    fill(i * 36, 100, 50);
    rect(i * 50, 0, 50, 100);
  }
  for(var i = 0; i < 10; i++) {
    fill(i * 36, 50, 50);
    rect(i * 50, 100, 50, 100);
  }

  for(var i = 0; i < 10; i++) {
    fill(i * 36, 100, 25);
    rect(i * 50, 200, 50, 100);
  }
  for(var i = 0; i < 10; i++) {
    fill(i * 36, 100, 75);
    rect(i * 50, 300, 50, 100);
  }
}
