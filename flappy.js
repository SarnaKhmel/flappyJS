let bird = new Image();
let back = new Image();
let road = new Image();
let pipeUp = new Image();
let pipeBottom = new Image();

bird.src = "img/bird.png";
road.src = "img/road.png";
back.src = "img/back.png";
pipeUp.src = "img/pipeUp.png";
pipeBottom.src = "img/pipeBottom.png";

let fly_audio = new Audio();
let score_audio = new Audio();

fly_audio.src = "audio/fly.mp3";
score_audio.src = "audio/score.mp3";

let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");

canvas.width = 256;
canvas.height = 512;

let xPos = 10;
let yPos = 150;
let velY = 0;
let gravity = 0.2;

let gap = 110;
let pipe = [];
pipe[0] = {
  x: canvas.width,
  y: 0,
};

function draw() {
  context.drawImage(back, 0, 0);
  context.drawImage(bird, xPos, yPos);

  if (yPos >= canvas.height) {
    location.reload();
  }
  velY += gravity;
  yPos += velY;

  for (let i = 0; i < pipe.length; i++) {
    context.drawImage(pipeUp, pipe[i].x, pipe[i].y);
    context.drawImage(
        pipeBottom,
        pipe[i].x, 
        pipe[i].y + pipeUp.height + gap
    );

    pipe[i].x -= 2;
  }

  context.drawImage(road, 0, canvas.height - road.height);
}

canvas.addEventListener("mousedown", moveUp);

function moveUp() {
  velY = -4;
  fly_audio.play();
}

setInterval(draw, 20);
