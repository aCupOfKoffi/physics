'use strict'

const canvasHeight = 400,
    canvasWidth = 400,
    g = 9.81;

let ball = {
    x: 100,
    y: 100,
    speed: 0,
    direction: 1
};

let canvas = document.getElementById('canvas'),
    canvasContext = canvas.getContext('2d');

// canvas.addEventListener('mousedown', (event) => {
//     x = event.offsetX;
//     y = event.offsetY;
//     canvasContext.beginPath();
//     canvasContext.arc(x, y, 10, 0, 2 * Math.PI);
//     canvasContext.fill();
//     speed = 0;
// });

function updateBall() {
    if (ball.y > canvasHeight){
        ball.direction = -1;
    }
    if(ball.y < 0) {
        ball.direction = 1;
    }

    if(ball.direction == 1){
        ball.y += ball.speed * ball.speed * 0.001;
        ball.speed++;
    }

    if(ball.direction == -1){
        ball.y -= ball.speed * ball.speed * 0.001;
        ball.speed--;
    }
    
    if (ball.speed)
};

function drawFrame() {
    canvasContext.clearRect(0, 0, canvasWidth, canvasHeight);
    console.log(ball.x, ball.y);
    canvasContext.fillStyle = 'black';
    canvasContext.beginPath();
    canvasContext.arc(ball.x, ball.y, 10, 0, 2 * Math.PI);
    canvasContext.fill();
};

function play() {
    drawFrame();
    updateBall();
    requestAnimationFrame(play);
}
play();