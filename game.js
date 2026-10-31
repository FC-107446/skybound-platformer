
const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

const playerImage = new Image();
playerImage.src = "images/player.png";

// Camera position.
const camera = {
  x: 0,
  y: 0
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

// Currently active fruit/platform colour.
let activePlatformColor = null;

// Platforms.
const platforms = [
  { x: 200, y: 330, width: 140, height: 10, color: "red" },
  { x: 300, y: 50, width: 70, height: 10, color: "blue" },
  { x: 400, y: 130, width: 40, height: 10, color: "green" },
  { x: 0, y: 150, width: 180, height: 10, color: "pink" },
  { x: 200, y: 200, width: 80, height: 10, color: "blue" },
  { x: 400, y: 260, width: 140, height: 10, color: "blue" },
  { x: 600, y: 320, width: 120, height: 10, color: "red" },
  { x: 760, y: 270, width: 140, height: 10, color: "blue" },
  { x: 980, y: 210, width: 130, height: 10, color: "green" },
  { x: 1200, y: 280, width: 160, height: 10, color: "red" },
  { x: 1450, y: 220, width: 140, height: 10, color: "blue" },
  { x: 1700, y: 300, width: 180, height: 10, color: "green" },
  { x: 1900, y: 250, width: 150, height: 10, color: "red" },
  { x: 600, y: 100, width: 100, height: 10, color: "blue" },
  { x: 2000, y: 230, width: 150, height: 10, color: "green" },

  // Additional pink platforms.
  { x: 100, y: 100, width: 120, height: 10, color: "pink" },
  { x: 900, y: 100, width: 120, height: 10, color: "pink" },
  { x: 1400, y: -100, width: 120, height: 10, color: "pink" },
  { x: 1900, y: -400, width: 120, height: 10, color: "pink" },

  // Higher platforms.
  { x: 1800, y: -100, width: 150, height: 10, color: "red" },
  { x: 1550, y: -250, width: 150, height: 10, color: "blue" },
  { x: 1300, y: -400, width: 150, height: 10, color: "green" },
  { x: 1050, y: -550, width: 150, height: 10, color: "red" },
  { x: 800, y: -700, width: 150, height: 10, color: "blue" },
  { x: 550, y: -850, width: 150, height: 10, color: "green" }
]; 

// Collectible fruit.
const fruits = [
  { x: 300, y: 290, color: "red", collected: false },
  { x: 500, y: 220, color: "blue", collected: false },
  { x: 340, y: 30, color: "green", collected: false },
  { x: 850, y: 230, color: "red", collected: false },
  { x: 1050, y: 170, color: "blue", collected: false },
  { x: 1300, y: 240, color: "green", collected: false }
];

// Collectible stars.
const stars = [
  { x: 220, y: 180, collected: false },
  { x: 420, y: 100, collected: false },
  { x: 680, y: 180, collected: false },
  { x: 950, y: 230, collected: false },
  { x: 1050, y: 170, collected: false },
  { x: 1300, y: 240, collected: false }
];

let score = 0;
let levelComplete = false;

const keys = {};

// Keyboard controls.
window.addEventListener("keydown", function(event) {
  keys[event.key] = true;

  if (event.key === " " || event.key.startsWith("Arrow")) {
    event.preventDefault();
  }
});

window.addEventListener("keyup", function(event) {
  keys[event.key] = false;
});

// Draw a five-pointed star.
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

// Draw fruit.
function drawFruit(x, y, color) {
  ctx.beginPath();
  ctx.arc(x, y, 10, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();

  // Leaf.
  ctx.beginPath();
  ctx.ellipse(x + 5, y - 10, 5, 3, -0.5, 0, Math.PI * 2);
  ctx.fillStyle = "#35a853";
  ctx.fill();
}

// Update game logic.
function update() {
  if (levelComplete) return;

  // Horizontal movement.
  if (keys["ArrowLeft"]) {
    player.x -= player.speed;
  }

  if (keys["ArrowRight"]) {
    player.x += player.speed;
  }

  // Keep player inside the world.
  player.x = Math.max(
    0,
    Math.min(worldWidth - player.width, player.x)
  );

  // Jump.
  if (keys[" "] && player.onGround) {
    player.velocityY = -player.jumpStrength;
    player.onGround = false;
  }

  // Gravity and vertical movement.
  const previousBottom = player.y + player.height;

  player.velocityY += player.gravity;
  player.y += player.velocityY;

  player.onGround = false;

  // Ground collision.
  const groundY = 400;

  if (
    player.y + player.height >= groundY &&
    player.velocityY >= 0
  ) {
    player.y = groundY - player.height;
    player.velocityY = 0;
    player.onGround = true;
  }

  // Platform collision.
  if (player.velocityY >= 0) {
    for (const platform of platforms) {

      // Pink platforms are always usable.
      // Other platforms require the matching fruit colour.
      if (
        platform.color !== "pink" &&
        platform.color !== activePlatformColor
      ) {
        continue;
      }

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

  // Collect fruit.
  for (const fruit of fruits) {
    if (!fruit.collected) {
      const distanceX =
        player.x + player.width / 2 - fruit.x;

      const distanceY =
        player.y + player.height / 2 - fruit.y;

      const distance = Math.sqrt(
        distanceX ** 2 + distanceY ** 2
      );

      if (distance < 25) {

        // Make all previously collected fruit reappear.
        for (const previousFruit of fruits) {
          previousFruit.collected = false;
        }

        // Hide the newly collected fruit.
        fruit.collected = true;

        // Switch active platform colour.
        activePlatformColor = fruit.color;
      }
    }
  }

  // Collect stars.
  for (const star of stars) {
    if (!star.collected) {
      const distanceX =
        player.x + player.width / 2 - star.x;

      const distanceY =
        player.y + player.height / 2 - star.y;

      const distance = Math.sqrt(
        distanceX ** 2 + distanceY ** 2
      );

      if (distance < 25) {
        star.collected = true;
        score++;
      }
    }
  }

  // Check level completion.
  if (stars.every(star => star.collected)) {
    levelComplete = true;
  }

  // Horizontal camera movement.
  const leftMargin = 200;
  const rightMargin = 600;

  if (player.x < camera.x + leftMargin) {
    camera.x = player.x - leftMargin;
  }

  if (player.x + player.width > camera.x + rightMargin) {
    camera.x = player.x + player.width - rightMargin;
  }

  camera.x = Math.max(
    0,
    Math.min(worldWidth - canvas.width, camera.x)
  );

  // Vertical camera movement.
  const topMargin = 150;
  const bottomMargin = 300;

  if (player.y < camera.y + topMargin) {
    camera.y = player.y - topMargin;
  }

  if (player.y + player.height > camera.y + bottomMargin) {
    camera.y = player.y + player.height - bottomMargin;
  }

  // Limit camera movement.
  camera.y = Math.max(-1000, Math.min(0, camera.y));
}

// Draw the game.
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Apply camera.
  ctx.save();
  ctx.translate(-camera.x, -camera.y);

  // Ground.
  ctx.fillStyle = "#1132a0";
  ctx.fillRect(0, 400, worldWidth, 50);

  // Platform colours.
  const platformColors = {
    red: "#e64b4b",
    blue: "#3985dc",
    green: "#46a65a",
    pink: "#ed75c5"
  };

  // Draw platforms.
  for (const platform of platforms) {
    ctx.fillStyle = platformColors[platform.color];

    ctx.fillRect(
      platform.x,
      platform.y,
      platform.width,
      platform.height
    );
  }

  // Draw stars.
  for (const star of stars) {
    if (!star.collected) {
      drawStar(star.x, star.y, 12);
    }
  }

  // Draw fruit.
  for (const fruit of fruits) {
    if (!fruit.collected) {
      drawFruit(fruit.x, fruit.y, fruit.color);
    }
  }

  // Draw player.
  if (playerImage.complete && playerImage.naturalWidth > 0) {
    ctx.drawImage(
      playerImage,
      player.x,
      player.y,
      player.width,
      player.height
    );
  } else {
    ctx.fillStyle = "#e64b4b";
    ctx.fillRect(
      player.x,
      player.y,
      player.width,
      player.height
    );
  }

  ctx.restore();

  // Score display.
  ctx.fillStyle = "white";
  ctx.font = "24px Arial";
  ctx.textAlign = "left";

  ctx.fillText(
    "Stars: " + score + "/" + stars.length,
    20,
    35
  );

  // Active colour display.
  ctx.fillText(
    "Active platform: " + (activePlatformColor || "None"),
    20,
    65
  );

  // Level completion message.
  if (levelComplete) {
    ctx.fillStyle = "white";
    ctx.font = "36px Arial";
    ctx.textAlign = "center";

    ctx.fillText(
      "LEVEL COMPLETE!",
      canvas.width / 2,
      canvas.height / 2
    );
  }
}

// Main game loop.
function gameLoop() {
  update();
  draw();

  requestAnimationFrame(gameLoop);
}

gameLoop();
