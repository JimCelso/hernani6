let frame1, frame2, frame3, frame4, frame5;
let currentImage;
let accumulaMusic;

function preload() {
  frame1 = loadImage('assets/frame1.png');
  frame2 = loadImage('assets/frame2.png');
  frame3 = loadImage('assets/frame3.png');
  frame4 = loadImage('assets/frame4.png');
  frame5 = loadImage('assets/frame5.png');
  accumulaMusic = loadSound('assets/accumula.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  textAlign(CENTER, CENTER);
  textSize(20);
  fill(255);
}

function draw() {
  background(50, 150, 200);
  
  if (currentImage) {
    image(currentImage, width / 2, height / 2);
  } else {
    text('Presiona Q, W, E, R, T para mostrar un Pokémon.\nPresiona S para reproducir/detener la música.', width / 2, height / 2);
  }
}

function keyPressed() {
  if (key === 'Q' || key === 'q') {
    currentImage = frame1;
  } else if (key === 'W' || key === 'w') {
    currentImage = frame2;
  } else if (key === 'E' || key === 'e') {
    currentImage = frame3;
  } else if (key === 'R' || key === 'r') {
    currentImage = frame4;
  } else if (key === 'T' || key === 't') {
    currentImage = frame5;
  } else if (key === 'S' || key === 's') {
    userStartAudio(); // desbloquea el audio
    if (accumulaMusic.isPlaying()) {
      accumulaMusic.stop();
    } else {
      accumulaMusic.play();
    }
  }
}
