let webcam;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  webcam = createCapture(VIDEO);
  webcam.size(400, 400);
  webcam.hide();
}

function draw() {
  // Mapeo del color según posición del mouse
  let r = map(mouseX, 0, width, 0, 255);
  let g = map(mouseY, 0, height, 0, 255);
  let b = map(mouseX + mouseY, 0, width + height, 255, 0);

  background(r, g, b);

  translate(width / 2, height / 2);
  scale(-1, 1); // Flip horizontal (espejo)
  image(webcam, -200, -200, 400, 400);
}
