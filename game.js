const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

const playerImage = new Image();
playerImage.src = "images/player.png";

const camera = {
  x: 0
};

const worldWidth = 2200;

const player = {
  x: 100,
  y: 300,
  width: 32,
  height: 40,
  velocityY: 0,
  gravity: 0.5,
  jumpStrength: 10,
  speed: 4,
  onGround: false
};

const platforms = [
  { x: 200, y: 330, width: 140, height: 10 },
  { x: 300, y: 50, width: 70, height: 10 },
  { x: 400, y: 130, width: 40, height: 10 },
  { x: 0, y: 150, width: 180, height: 10 },
  { x: 200, y: 200, width: 80, height: 10 },
  { x: 400, y: 260, width: 140, height: 10 },
  { x: 600, y: 320, width: 120, height: 10 },
  { x: 760, y: 270, width: 140, height: 10 },
  { x: 980, y: 210, width: 130, height: 10 },
  { x: 1200, y: 280, width: 160, height: 10 },
  { x: 1450, y: 220, width: 140, height: 10 },
  { x: 1700, y: 300, width: 180, height: 10 },
  { x: 1900, y: 250, width: 150, height: 10 },
  { x: 600, y: 100, width: 100, height: 10 },
  { x: 2000, y: 230, width: 150, height: 10 }
];

const stars = [
  { x: 300, y: 290, collected: false },
  { x: 500, y: 220, collected: false },
  { x: 680, y: 80, collected: false },
  { x: 850, y: 230, collected: false },
  { x: 1050, y: 170, collected: false },
  { x: 1300, y: 240, collected: false }
];
 
let score = 0;


const keys = {};

window.addEventListener("keydown", function(event) {
  keys[event.key] = true;

  // Stop the page scrolling when using the game controls.
  if (event.key === " " || event.key.startsWith("Arrow")) {
    event.preventDefault();
  }
});

window.addEventListener("keyup", function(event) {
  keys[event.key] = false;
});

function drawStar(x, y, size) {
  ctx.beginPath();

  for (let i = 0; i < 10; i++) {
    const radius = i % 2 === 0 ? size : size / 2;
    const angle = (Math.PI / 5) * i - Math.PI / 2;

    const starX = x + Math.cos(angle) * radius;
    const starY = y + Math.sin(angle) * radius;

    if (i === 0) {
      ctx.moveTo(starX, starY);
    } else {
      ctx.lineTo(starX, starY);
    }
  }

  ctx.closePath();
  ctx.fillStyle = "#FFD700";
  ctx.fill();
}

function update() {
  // Horizontal movement.
  if (keys["ArrowLeft"]) {
    player.x -= player.speed;
  }

  if (keys["ArrowRight"]) {
    player.x += player.speed;
  }

  // Keep the player inside the world.
  player.x = Math.max(0, Math.min(worldWidth - player.width, player.x));

  // Jump only when standing on the ground or a platform.
  if (keys[" "] && player.onGround) {
    player.velocityY = -player.jumpStrength;
    player.onGround = false;
  }

  // Apply gravity and vertical movement.
  const previousBottom = player.y + player.height;
  player.velocityY += player.gravity;
  player.y += player.velocityY;
  player.onGround = false;

  // Ground collision.
  const groundY = 400;

  if (player.y + player.height >= groundY && player.velocityY >= 0) {
    player.y = groundY - player.height;
    player.velocityY = 0;
    player.onGround = true;
  }

  // Platform collision: land when falling onto the top of a platform.
  if (player.velocityY >= 0) {
    for (const platform of platforms) {
      const currentBottom = player.y + player.height;
      const overlapsHorizontally =
        player.x + player.width > platform.x &&
        player.x < platform.x + platform.width;

      const crossedPlatformTop =
        previousBottom <= platform.y &&
        currentBottom >= platform.y;

      if (overlapsHorizontally && crossedPlatformTop) {
        player.y = platform.y - player.height;
        player.velocityY = 0;
        player.onGround = true;
        break;
      }
    }
  }


  // Check whether the player collects a star.
  for (const star of stars) {
    if (!star.collected) {
      const distanceX = player.x + player.width / 2 - star.x;
      const distanceY = player.y + player.height / 2 - star.y;
      const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);

      if (distance < 25) {
        star.collected = true;
        score++;
      }
    }
  }

  // Keep the camera slightly ahead of / behind the player.
  const leftMargin = 200;
  const rightMargin = 600;

  if (player.x < camera.x + leftMargin) {
    camera.x = player.x - leftMargin;
  }

  if (player.x + player.width > camera.x + rightMargin) {
    camera.x = player.x + player.width - rightMargin;
  }

  // Keep the camera within the world.
  camera.x = Math.max(0, Math.min(worldWidth - canvas.width, camera.x));
}

function draw() {
  // Clear the screen before drawing the next frame.
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Move the drawing view to match the camera.
  ctx.save();
  ctx.translate(-camera.x, 0);

  // Ground.
  ctx.fillStyle = "#1132a0";
  ctx.fillRect(0, 400, worldWidth, 50);

  // Platforms.
  ctx.fillStyle = "#5b9ac6";

  for (const platform of platforms) {
    ctx.fillRect(
      platform.x,
      platform.y,
      platform.width,
      platform.height
    );
  }

// Draw collectible stars.
for (const star of stars) {
  if (!star.collected) {
    drawStar(star.x, star.y, 12);
  }
}

  // Player sprite. The camera translation is already applied, so use
  // the player's world coordinates directly here.
  if (playerImage.complete && playerImage.naturalWidth > 0) {
    ctx.drawImage(
      playerImage,
      player.x,
      player.y,
      player.width,
      player.height
    );
  } else {
    // Temporary fallback while the image loads or if it cannot be found.
    ctx.fillStyle = "#e64b4b";
    ctx.fillRect(player.x, player.y, player.width, player.height);
  }

  ctx.restore();
  // Draw the score on the screen.
  ctx.fillStyle = "white";
  ctx.font = "24px Arial";
  ctx.textAlign = "left";
  ctx.fillText("Stars: " + score, 20, 35);
}

function gameLoop() {
  update();
  draw();
  requestAnimationFrame(gameLoop);
}

gameLoop();