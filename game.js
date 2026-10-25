const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

// player is rectangle
const player = {
  x: 100,
  y: 300,
  width: 32,
  height: 40,
  velocityY: 0,
  gravity: 0.5,
  jumpStrength: 10,
  onGround: false
};

//platromms
const platforms = [
  { x: 200, y: 330, width: 140, height: 15 },
  { x: 400, y: 260, width: 140, height: 15 },
  { x: 600, y: 320, width: 120, height: 15 }
];

const keys = {};

window.addEventListener("keydown", function(event) {
  keys[event.key] = true;
});

window.addEventListener("keyup", function(event) {
  keys[event.key] = false;
});


function draw() {
  // Clear the previous frame
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  //ground
  ctx.fillStyle = "#34734a";
  ctx.fillRect(0, 400, canvas.width, 50);

  //platform
  ctx.fillStyle = "#b430ab";

  for (const platform of platforms) {
    ctx.fillRect(
      platform.x,
      platform.y,
      platform.width,
      platform.height
  );
}

  // player
  ctx.fillStyle = "#f4d35e";
  ctx.fillRect(
    player.x,
    player.y,
    player.width,
    player.height
  );
}

draw();



const speed = 4;


function update() {
  if (keys["ArrowRight"]) {
    player.x += speed;
  }

  if (keys["ArrowLeft"]) {
    player.x -= speed;
  }

  // walls
  player.x = Math.max(
    0,
    Math.min(canvas.width - player.width, player.x)
  );

  // Jump = the spacebar
  if (keys[" "] && player.onGround) {
    player.velocityY = -player.jumpStrength;
    player.onGround = false;
  }

  //gravity and jumping
  player.velocityY += player.gravity;
  player.y += player.velocityY;

  // Land on the ground.
  const groundY = 400;

  if (player.y + player.height >= groundY) {
    player.y = groundY - player.height;
    player.velocityY = 0;
    player.onGround = true;
  }
}


function gameLoop() {
  update();
  draw();

  requestAnimationFrame(gameLoop);
}

gameLoop();
