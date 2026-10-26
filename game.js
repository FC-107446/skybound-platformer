const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");
// Controls which part of the world is visible
const camera = {
  x: 0
};
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
  { x: 200, y: 330, width: 140, height: 10 },
  { x: 400, y: 260, width: 140, height: 10 },
  { x: 600, y: 320, width: 120, height: 10 },
  { x: 760, y: 270, width: 140, height: 15 },
  { x: 980, y: 210, width: 130, height: 15 },
  { x: 1200, y: 280, width: 160, height: 15 },
  { x: 1450, y: 220, width: 140, height: 15 },
  { x: 1700, y: 300, width: 180, height: 15 },
  { x: 2000, y: 230, width: 150, height: 15 }
];

const keys = {};

window.addEventListener("keydown", function(event) {
  keys[event.key] = true;
});

window.addEventListener("keyup", function(event) {
  keys[event.key] = false;
});



function draw() {
  // Clear the screen.
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Move the view to the camera's position.
  ctx.save();
  ctx.translate(-camera.x, 0);

  // Draw the ground across the whole world.
  ctx.fillStyle = "#34734a";
  ctx.fillRect(0, 400, 2200, 50);

  // Draw the platforms.
  ctx.fillStyle = "#b430ab";

  for (const platform of platforms) {
    ctx.fillRect(
      platform.x,
      platform.y,
      platform.width,
      platform.height
    );
  }


  // Draw the player.
  // Save the drawing settings before making the character.
  ctx.save();

  // Use the player's position as the character's origin.
  ctx.translate(player.x, player.y);

  // Boots.
  ctx.fillStyle = "#49352a";
  ctx.fillRect(3, 34, 11, 6);
  ctx.fillRect(19, 34, 11, 6);

  // Legs.
  ctx.fillStyle = "#315a9b";
  ctx.fillRect(5, 25, 9, 10);
  ctx.fillRect(19, 25, 9, 10);

  // Body and jacket.
  ctx.fillStyle = "#e8793e";
  ctx.fillRect(4, 13, 24, 14);

  // Arms.
  ctx.fillStyle = "#f0bd91";
  ctx.fillRect(0, 15, 5, 11);
  ctx.fillRect(27, 15, 5, 11);

  // Head.
  ctx.fillStyle = "#f0bd91";
  ctx.fillRect(7, 2, 19, 14);

  // Hair.
  ctx.fillStyle = "#50392f";
  ctx.fillRect(6, 0, 21, 5);
  ctx.fillRect(5, 3, 5, 7);

  // Eyes.
  ctx.fillStyle = "#202633";
  ctx.fillRect(11, 7, 3, 3);
  ctx.fillRect(21, 7, 3, 3);

  // Backpack.
  ctx.fillStyle = "#4b7652";
  ctx.fillRect(27, 16, 5, 10);

  // Restore the drawing settings.
  ctx.restore();


  // Stop applying the camera transformation.
  ctx.restore();
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

  // Keep the player inside the world.
  player.x = Math.max(0, Math.min(2200 - player.width, player.x));

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

  // Land on floating platforms while falling.
  for (const platform of platforms) {
    const playerBottom = player.y + player.height;

    const overlapsHorizontally =
      player.x + player.width > platform.x &&
      player.x < platform.x + platform.width;

    const crossesPlatformTop =
      playerBottom >= platform.y &&
      playerBottom - player.velocityY <= platform.y;

    if (
      player.velocityY >= 0 &&
      overlapsHorizontally &&
      crossesPlatformTop
    ) {
      player.y = platform.y - player.height;
      player.velocityY = 0;
      player.onGround = true;
    }
  }




  // Camera margins: let the player move around the screen.
  const leftMargin = 200;
  const rightMargin = 600;

  // Scroll left if the player gets too close to the left margin.
  if (player.x < camera.x + leftMargin) {
    camera.x = player.x - leftMargin;
  }

  // Scroll right if the player gets too close to the right margin.
  if (player.x + player.width > camera.x + rightMargin) {
    camera.x = player.x + player.width - rightMargin;
  }

  // Keep the camera inside the world.
  camera.x = Math.max(
    0,
    Math.min(2200 - canvas.width, camera.x)
  );

}




function gameLoop() {
  update();
  draw();

  requestAnimationFrame(gameLoop);
}

gameLoop();