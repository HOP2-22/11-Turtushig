// Set up the canvas
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Set the canvas dimensions
const canvasWidth = 500;
const canvasHeight = 500;
canvas.width = canvasWidth;
canvas.height = canvasHeight;

// Set up the game objects
const ball = {
  x: canvasWidth / 2,
  y: canvasHeight / 2,
  radius: 10,
  speedX: 5,
  speedY: 5,
  color: "white",
};

const player1 = {
  x: 10,
  y: canvasHeight / 2 - 50,
  width: 10,
  height: 100,
  color: "white",
  score: 0,
};

const player2 = {
  x: canvasWidth - 20,
  y: canvasHeight / 2 - 50,
  width: 10,
  height: 100,
  color: "white",
  score: 0,
};

// Set up the game loop
const update = () => {
  // Move the ball
  ball.x += ball.speedX;
  ball.y += ball.speedY;

  // Check for collision with the top and bottom walls
  if (ball.y + ball.radius >= canvasHeight || ball.y - ball.radius <= 0) {
    ball.speedY = -ball.speedY;
  }

  // Check for collision with the players
  if (
    ball.x - ball.radius <= player1.x + player1.width &&
    ball.y >= player1.y &&
    ball.y <= player1.y + player1.height
  ) {
    ball.speedX = -ball.speedX;
  }

  if (
    ball.x + ball.radius >= player2.x &&
    ball.y >= player2.y &&
    ball.y <= player2.y + player2.height
  ) {
    ball.speedX = -ball.speedX;
  }

  // Check for scoring
  if (ball.x + ball.radius < 0) {
    player2.score++;
    resetBall();
  } else if (ball.x - ball.radius > canvasWidth) {
    player1.score++;
    resetBall();
  }

  // Draw the game objects
  drawBall();
  drawPlayer1();
  drawPlayer2();
};

// Draw the ball on the canvas
const drawBall = () => {
  ctx.beginPath();
  ctx.arc(ball.x, ball.y, ball.radius, 0, 2 * Math.PI);
  ctx.fillStyle = ball.color;
  ctx.fill();
  ctx.closePath();
};

// Draw player 1 on the canvas
const drawPlayer1 = () => {
  ctx.fillStyle = player1.color;
  ctx.fillRect(player1.x, player1.y, player1.width, player1.height);
};

// Draw player 2 on the canvas
const drawPlayer2 = () => {
  ctx.fillStyle = player2.color;
  ctx.fillRect(player2.x, player2);
};
