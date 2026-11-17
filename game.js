
const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

const playerImage = new Image();
playerImage.src = "images/player.png";

// =====================================================
// WORLD AND CAMERA
// =====================================================

const worldWidth = 2050;

const camera = {
  x: 0,
  y: 0
};

// =====================================================
// PLAYER
// =====================================================

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

// =====================================================
// TIMER AND LEVEL PROGRESSION
// =====================================================

let startTime = null;
let elapsedTime = 0;
let showTimer = true;

// The time at which the completion screen appeared
let levelCompleteTime = null;

// Whether the player has completed every level
let gameFinished = false;

// How long the completion screen stays visible
const LEVEL_COMPLETE_DURATION = 3000;

// =====================================================
// GAME SETTINGS
// =====================================================

let editMode = false;
let activePlatformColor = null;

const SAVE_KEY = "skybound-levels-v1";
const validColours = ["red", "blue", "green", "pink"];

// =====================================================
// LEVEL 1 - ORIGINAL LEVEL
// =====================================================

const level1Platforms = [
  { x: 200, y: 330, width: 140, height: 10, color: "red" },
  { x: 300, y: 50, width: 70, height: 10, color: "blue" },
  { x: 400, y: 110, width: 40, height: 10, color: "green" },
  { x: 0, y: 150, width: 180, height: 10, color: "pink" },
  { x: 200, y: 200, width: 80, height: 10, color: "blue" },
  { x: 400, y: 260, width: 140, height: 10, color: "blue" },
  { x: 600, y: 320, width: 120, height: 10, color: "red" },
  { x: 760, y: 140, width: 140, height: 12, color: "red" },
  { x: 980, y: 210, width: 130, height: 10, color: "green" },
  { x: 1200, y: 280, width: 160, height: 10, color: "red" },
  { x: 1450, y: 220, width: 140, height: 10, color: "blue" },
  { x: 600, y: 100, width: 100, height: 10, color: "blue" },

  // Additional pink platforms.
  { x: 100, y: 100, width: 120, height: 10, color: "pink" },
  { x: 900, y: 100, width: 120, height: 10, color: "pink" },
  { x: 1400, y: -100, width: 120, height: 10, color: "pink" },
  { x: 1900, y: -400, width: 120, height: 10, color: "pink" },
  { x: 640, y: 200, width: 70, height: 10, color: "pink" },
  { x: 740, y: 270, width: 80, height: 10, color: "pink" },

  // Higher platforms.
  { x: 1800, y: -100, width: 150, height: 10, color: "red" },
  { x: 1550, y: -250, width: 150, height: 10, color: "blue" },
  { x: 1300, y: -400, width: 150, height: 10, color: "green" },
  { x: 1050, y: -550, width: 150, height: 10, color: "red" },
  { x: 800, y: -700, width: 150, height: 10, color: "blue" },
  { x: 550, y: -880, width: 150, height: 10, color: "green" }
];

const level1Fruits = [
  { x: 300, y: 290, color: "red", collected: false },
  { x: 500, y: 220, color: "blue", collected: false },
  { x: 1350, y: 240, color: "blue", collected: false },
  { x: 60, y: 120, color: "red", collected: false },
  { x: 340, y: 30, color: "green", collected: false },
  { x: 830, y: 250, color: "red", collected: false },
  { x: 900, y: 125, color: "green", collected: false }
];

const level1Stars = [
  { x: 220, y: 180, collected: false },
  { x: 420, y: 80, collected: false },
  { x: 680, y: 180, collected: false },
  { x: 1050, y: 250, collected: false },
  { x: 1350, y: 170, collected: false },
  { x: 1600, y: 200, collected: false }
];

// =====================================================
// LEVELS
// =====================================================

// These are the built-in levels
// If levels.js has been exported and added to index.html its levels replace these defaults

const defaultLevels = [
  {
    name: "Level 1",
    platforms: level1Platforms,
    fruits: level1Fruits,
    stars: level1Stars
  },
  {
    name: "Level 2",
    platforms: [],
    fruits: [],
    stars: []
  },
  {
    name: "Level 3",
    platforms: [],
    fruits: [],
    stars: []
  }
];

const hasPublishedLevels =
  Array.isArray(window.SKYBOUND_LEVELS) &&
  window.SKYBOUND_LEVELS.length > 0;

const startingLevels = hasPublishedLevels
  ? window.SKYBOUND_LEVELS
  : defaultLevels;

// Copy the level data so gameplay never change
// the original level definitions
const levels = startingLevels.map((level, index) => ({
  name: typeof level.name === "string"
    ? level.name
    : `Level ${index + 1}`,

  platforms: Array.isArray(level.platforms)
    ? level.platforms.map(platform => ({ ...platform }))
    : [],

  fruits: Array.isArray(level.fruits)
    ? level.fruits.map(fruit => ({
        ...fruit,
        collected: false
      }))
    : [],

  stars: Array.isArray(level.stars)
    ? level.stars.map(star => ({
        ...star,
        collected: false
      }))
    : [],

  score: 0,
  complete: false
}));

let currentLevelIndex = 0;

function getCurrentLevel() {
  return levels[currentLevelIndex];
}

// ==============================================
// RESET PLAYER AND LEVEL STATE
// ==============================================

function clearMovementKeys() {
  keys.left = false;
  keys.right = false;
  keys.jump = false;
  keys.down = false;
}

function resetPlayerAndCamera() {
  player.x = 100;
  player.y = 300;
  player.velocityY = 0;
  player.onGround = false;

  camera.x = 0;
  camera.y = 0;

  clearMovementKeys();
}

function resetLevelState() {
  resetPlayerAndCamera();

  activePlatformColor = null;

  startTime = null;
  elapsedTime = 0;

  levelCompleteTime = null;
  gameFinished = false;
}

// ===================================================
// KEYBOARD CONTROLS
// ===================================================

const keys = {
  left: false,
  right: false,
  jump: false,
  down: false
};

window.addEventListener("keydown", function(event) {
  const key = event.key.toLowerCase();

  // Don't control the game while using editor inputs
  if (
    ["INPUT", "SELECT", "TEXTAREA"].includes(
      event.target?.tagName
    )
  ) {
    return;
  }

  if (
    event.code === "Space" ||
    event.key.startsWith("Arrow")
  ) {
    event.preventDefault();
  }

  // Toggle Build Mode
  if (
    event.ctrlKey &&
    event.shiftKey &&
    key === "e" &&
    !event.repeat
  ) {
    event.preventDefault();

    editMode = !editMode;

    clearMovementKeys();
    player.velocityY = 0;
    player.onGround = false;

    updateEditorVisibility();
  }

  // Movement
  if (key === "arrowleft" || key === "a") {
    keys.left = true;
  }

  if (key === "arrowright" || key === "d") {
    keys.right = true;
  }

  if (key === "arrowdown" || key === "s") {
    keys.down = true;
  }

  // Jump normally, fly upwards in Build Mode
  if (
    key === "arrowup" ||
    key === "w" ||
    event.code === "Space"
  ) {
    keys.jump = true;
  }

  // Show/hide timer.
  if (key === "t" && !event.repeat) {
    showTimer = !showTimer;
  }
});

window.addEventListener("keyup", function(event) {
  const key = event.key.toLowerCase();

  if (key === "arrowleft" || key === "a") {
    keys.left = false;
  }

  if (key === "arrowright" || key === "d") {
    keys.right = false;
  }

  if (key === "arrowdown" || key === "s") {
    keys.down = false;
  }

  if (
    key === "arrowup" ||
    key === "w" ||
    event.code === "Space"
  ) {
    keys.jump = false;
  }
});

window.addEventListener("blur", clearMovementKeys);

// =====================================================
// LEVEL EDITOR INTERFACE
// =====================================================

// Create the editor toolbar.
const editorToolbar = document.createElement("div");

editorToolbar.style.cssText = `
  display: none;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
  padding: 12px;
  margin-bottom: 10px;
  background: #20252e;
  color: white;
  border-radius: 8px;
  font-family: Arial, sans-serif;
  font-size: 14px;
`;

canvas.parentNode.insertBefore(editorToolbar, canvas);

// Helper to create toolbar labels.
function createEditorLabel(text) {
  const label = document.createElement("label");

  label.textContent = text;

  label.style.cssText = `
    display: flex;
    align-items: center;
    gap: 6px;
  `;

  return label;
}

// Helper to create toolbar buttons.
function createEditorButton(text) {
  const button = document.createElement("button");

  button.type = "button";
  button.textContent = text;

  button.style.cssText = `
    padding: 7px 12px;
    border: 0;
    border-radius: 5px;
    background: #3b82f6;
    color: white;
    cursor: pointer;
    font-size: 14px;
  `;

  return button;
}

// Level selector.
const levelSelect = document.createElement("select");

levels.forEach((level, index) => {
  const option = document.createElement("option");

  option.value = index;
  option.textContent = level.name;

  levelSelect.appendChild(option);
});

levelSelect.addEventListener("change", function() {
  currentLevelIndex = Number(levelSelect.value);

  resetLevelState();
});

// Object type selector.
const objectSelect = document.createElement("select");

[
  { value: "platform", text: "Platform" },
  { value: "fruit", text: "Fruit" },
  { value: "star", text: "Star" }
].forEach(item => {
  const option = document.createElement("option");

  option.value = item.value;
  option.textContent = item.text;

  objectSelect.appendChild(option);
});

// Colour selector.
const colorSelect = document.createElement("select");

validColours.forEach(color => {
  const option = document.createElement("option");

  option.value = color;
  option.textContent =
    color.charAt(0).toUpperCase() + color.slice(1);

  colorSelect.appendChild(option);
});

// Platform width selector.
const widthInput = document.createElement("input");

widthInput.type = "number";
widthInput.min = "20";
widthInput.max = "1000";
widthInput.step = "10";
widthInput.value = "150";
widthInput.style.width = "75px";

// Save and Load buttons.
const saveButton = createEditorButton("Save Levels");
const loadButton = createEditorButton("Load Levels");

const exportButton = createEditorButton(
  "Export for Website"
);

exportButton.style.background = "#16834a";

// Status text for save/load feedback.
const editorStatus = document.createElement("span");

editorStatus.style.cssText = `
  color: #bfc8d6;
  min-width: 150px;
`;

function setEditorStatus(message) {
  editorStatus.textContent = message;
}

// Add toolbar elements.
editorToolbar.appendChild(createEditorLabel("Level:"));
editorToolbar.appendChild(levelSelect);

editorToolbar.appendChild(createEditorLabel("Object:"));
editorToolbar.appendChild(objectSelect);

editorToolbar.appendChild(createEditorLabel("Colour:"));
editorToolbar.appendChild(colorSelect);

const widthLabel = createEditorLabel("Platform width:");

widthLabel.appendChild(widthInput);
editorToolbar.appendChild(widthLabel);

editorToolbar.appendChild(saveButton);
editorToolbar.appendChild(loadButton);
editorToolbar.appendChild(exportButton);
editorToolbar.appendChild(editorStatus);

// Instructions.
const editorInstructions = document.createElement("span");

editorInstructions.textContent =
  "Choose an object and click in the game to place it.";

editorInstructions.style.cssText = `
  flex-basis: 100%;
  color: #bfc8d6;
  margin-top: 3px;
`;

editorToolbar.appendChild(editorInstructions);

// Update toolbar based on selected object.
function updateEditorControls() {
  const selectedObject = objectSelect.value;
  const isPlatform = selectedObject === "platform";

  widthLabel.style.display = isPlatform
    ? "flex"
    : "none";

  if (selectedObject === "platform") {
    editorInstructions.textContent =
      "Choose a platform colour and width, then click where you want it. Use WASD or the arrow keys to fly around.";
  } else if (selectedObject === "fruit") {
    editorInstructions.textContent =
      "Choose a fruit colour, then click where you want the fruit. Use WASD or the arrow keys to fly around.";
  } else {
    editorInstructions.textContent =
      "Click in the game to place a star. Use WASD or the arrow keys to fly around.";
  }
}

objectSelect.addEventListener(
  "change",
  updateEditorControls
);

// Show or hide the editor.
function updateEditorVisibility() {
  editorToolbar.style.display = editMode
    ? "flex"
    : "none";
}

updateEditorControls();
updateEditorVisibility();

// =====================================================
// SAVE AND LOAD LEVELS
// =====================================================

function createSaveData() {
  return {
    version: 1,
    currentLevelIndex,
    activePlatformColor,

    levels: levels.map(level => ({
      name: level.name,

      platforms: level.platforms.map(platform => ({
        x: platform.x,
        y: platform.y,
        width: platform.width,
        height: platform.height,
        color: platform.color
      })),

      fruits: level.fruits.map(fruit => ({
        x: fruit.x,
        y: fruit.y,
        color: fruit.color,
        collected: Boolean(fruit.collected)
      })),

      stars: level.stars.map(star => ({
        x: star.x,
        y: star.y,
        collected: Boolean(star.collected)
      })),

      score: level.score,
      complete: Boolean(level.complete)
    }))
  };
}

function saveLevels() {
  try {
    localStorage.setItem(
      SAVE_KEY,
      JSON.stringify(createSaveData())
    );

    setEditorStatus("Levels saved in this browser.");
  } catch (error) {
    console.error(
      "Could not save Skybound levels:",
      error
    );

    setEditorStatus(
      "Save failed. Browser storage may be unavailable."
    );
  }
}

function isValidPosition(value) {
  return (
    typeof value === "number" &&
    Number.isFinite(value)
  );
}

function restoreLevelsFromData(data) {
  if (
    !data ||
    data.version !== 1 ||
    !Array.isArray(data.levels) ||
    data.levels.length !== levels.length
  ) {
    throw new Error(
      "The saved level data is not in the expected format."
    );
  }

  // Validate all the data before changing any levels.
  const restoredLevels = data.levels.map(
    (savedLevel, index) => {
      if (
        !savedLevel ||
        !Array.isArray(savedLevel.platforms) ||
        !Array.isArray(savedLevel.fruits) ||
        !Array.isArray(savedLevel.stars)
      ) {
        throw new Error(
          `Level ${index + 1} is damaged or incomplete.`
        );
      }

      const platforms = savedLevel.platforms.map(
        platform => {
          if (
            !platform ||
            !isValidPosition(platform.x) ||
            !isValidPosition(platform.y) ||
            !isValidPosition(platform.width) ||
            !isValidPosition(platform.height) ||
            platform.width <= 0 ||
            platform.height <= 0 ||
            !validColours.includes(platform.color)
          ) {
            throw new Error(
              `A platform in Level ${index + 1} is invalid.`
            );
          }

          return {
            x: platform.x,
            y: platform.y,
            width: platform.width,
            height: platform.height,
            color: platform.color
          };
        }
      );

      const fruits = savedLevel.fruits.map(fruit => {
        if (
          !fruit ||
          !isValidPosition(fruit.x) ||
          !isValidPosition(fruit.y) ||
          !validColours.includes(fruit.color)
        ) {
          throw new Error(
            `A fruit in Level ${index + 1} is invalid.`
          );
        }

        return {
          x: fruit.x,
          y: fruit.y,
          color: fruit.color,
          collected: Boolean(fruit.collected)
        };
      });

      const stars = savedLevel.stars.map(star => {
        if (
          !star ||
          !isValidPosition(star.x) ||
          !isValidPosition(star.y)
        ) {
          throw new Error(
            `A star in Level ${index + 1} is invalid.`
          );
        }

        return {
          x: star.x,
          y: star.y,
          collected: Boolean(star.collected)
        };
      });

      return {
        name: levels[index].name,
        platforms,
        fruits,
        stars,
        score: Number.isFinite(savedLevel.score)
          ? Math.max(0, Math.floor(savedLevel.score))
          : 0,
        complete: Boolean(savedLevel.complete)
      };
    }
  );

  // Replace existing levels only after all data is valid.
  restoredLevels.forEach((restoredLevel, index) => {
    Object.assign(levels[index], restoredLevel);
  });

  const savedIndex = Number(data.currentLevelIndex);

  currentLevelIndex =
    Number.isInteger(savedIndex) &&
    savedIndex >= 0 &&
    savedIndex < levels.length
      ? savedIndex
      : 0;

  activePlatformColor =
    validColours.includes(data.activePlatformColor)
      ? data.activePlatformColor
      : null;

  levelSelect.value = String(currentLevelIndex);

  resetPlayerAndCamera();

  startTime = null;
  elapsedTime = 0;
  levelCompleteTime = null;
  gameFinished = false;
}

function loadLevels(showStatus = true) {
  try {
    const savedData = localStorage.getItem(SAVE_KEY);

    if (!savedData) {
      if (showStatus) {
        setEditorStatus(
          "No saved levels found in this browser."
        );
      }

      return false;
    }

    restoreLevelsFromData(JSON.parse(savedData));

    if (showStatus) {
      setEditorStatus(
        "Your saved levels have been loaded."
      );
    }

    return true;
  } catch (error) {
    console.error(
      "Could not load Skybound levels:",
      error
    );

    if (showStatus) {
      setEditorStatus(
        "Load failed. The saved data may be damaged."
      );
    }

    return false;
  }
}

function exportLevelsForWebsite() {
  // Publish a clean starting state.
  // All fruit and stars are available, and player progress
  // is reset for everyone who plays the level.

  const publishedLevels = levels.map(level => ({
    name: level.name,

    platforms: level.platforms.map(platform => ({
      x: platform.x,
      y: platform.y,
      width: platform.width,
      height: platform.height,
      color: platform.color
    })),

    fruits: level.fruits.map(fruit => ({
      x: fruit.x,
      y: fruit.y,
      color: fruit.color,
      collected: false
    })),

    stars: level.stars.map(star => ({
      x: star.x,
      y: star.y,
      collected: false
    }))
  }));

  const fileContents =
    "// Skybound level data. This file is loaded by game.js.\n" +
    "window.SKYBOUND_LEVELS = " +
    JSON.stringify(publishedLevels, null, 2) +
    ";\n";

  const blob = new Blob(
    [fileContents],
    { type: "text/javascript" }
  );

  const downloadUrl = URL.createObjectURL(blob);
  const downloadLink = document.createElement("a");

  downloadLink.href = downloadUrl;
  downloadLink.download = "levels.js";

  document.body.appendChild(downloadLink);
  downloadLink.click();
  downloadLink.remove();

  setTimeout(() => {
    URL.revokeObjectURL(downloadUrl);
  }, 1000);

  setEditorStatus(
    "Exported levels.js. Add it to your website files."
  );
}

saveButton.addEventListener("click", saveLevels);

loadButton.addEventListener("click", function() {
  loadLevels(true);
});

exportButton.addEventListener(
  "click",
  exportLevelsForWebsite
);

// Restore browser-saved levels only when there is
// no published levels.js.
if (!hasPublishedLevels) {
  loadLevels(false);
}

// =====================================================
// ADD OBJECTS BY CLICKING
// =====================================================

canvas.addEventListener("click", function(event) {
  if (!editMode) return;

  const rect = canvas.getBoundingClientRect();

  // Convert screen position into world coordinates.
  const screenX =
    (event.clientX - rect.left) *
    (canvas.width / rect.width);

  const screenY =
    (event.clientY - rect.top) *
    (canvas.height / rect.height);

  const worldX = screenX + camera.x;
  const worldY = screenY + camera.y;

  const selectedColor = colorSelect.value;
  const currentLevel = getCurrentLevel();

  // Add a platform.
  if (objectSelect.value === "platform") {
    let width = Number(widthInput.value);

    if (!Number.isFinite(width)) {
      width = 150;
    }

    width = Math.max(20, Math.min(1000, width));

    // Centre the platform around the clicked position.
    const platformX = Math.max(
      0,
      Math.min(worldWidth - width, worldX - width / 2)
    );

    currentLevel.platforms.push({
      x: Math.round(platformX),
      y: Math.round(worldY),
      width,
      height: 10,
      color: selectedColor
    });
  }

  // Add fruit.
  if (objectSelect.value === "fruit") {
    currentLevel.fruits.push({
      x: Math.round(
        Math.max(0, Math.min(worldWidth, worldX))
      ),
      y: Math.round(worldY),
      color: selectedColor,
      collected: false
    });
  }

  // Add a star.
  if (objectSelect.value === "star") {
    currentLevel.stars.push({
      x: Math.round(
        Math.max(0, Math.min(worldWidth, worldX))
      ),
      y: Math.round(worldY),
      collected: false
    });
  }

  // Adding something to a completed level makes
  // it editable and playable again.
  currentLevel.complete = false;
  levelCompleteTime = null;
  gameFinished = false;
});

// =====================================================
// DRAWING FUNCTIONS
// =====================================================

// Draw a five-pointed star.
function drawStar(x, y, size) {
  ctx.beginPath();

  for (let i = 0; i < 10; i++) {
    const radius = i % 2 === 0
      ? size
      : size / 2;

    const angle =
      (Math.PI / 5) * i - Math.PI / 2;

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
  ctx.ellipse(
    x + 5,
    y - 10,
    5,
    3,
    -0.5,
    0,
    Math.PI * 2
  );

  ctx.fillStyle = "#35a853";
  ctx.fill();
}

// =====================================================
// LEVEL PROGRESSION
// =====================================================

function progressToNextLevel() {
  // Check whether another level exists.
  if (currentLevelIndex < levels.length - 1) {

    currentLevelIndex++;

    // Update the editor's level selector too.
    levelSelect.value = String(currentLevelIndex);

    // Reset player, camera, timer and fruit colour.
    resetLevelState();

  } else {

    // There are no more levels.
    gameFinished = true;
    levelCompleteTime = null;

    clearMovementKeys();
  }
}

// =====================================================
// UPDATE GAME LOGIC
// =====================================================

function update() {
  const currentLevel = getCurrentLevel();

  // Stop gameplay after winning.
  // Build Mode can still be used.
  if (gameFinished && !editMode) {
    return;
  }

  // Handle the level completion countdown.
  if (currentLevel.complete && !editMode) {

    // Start the countdown if it hasn't started.
    if (levelCompleteTime === null) {
      levelCompleteTime = performance.now();
    }

    // Wait three seconds before progressing.
    if (
      performance.now() - levelCompleteTime >=
      LEVEL_COMPLETE_DURATION
    ) {
      progressToNextLevel();
    }

    return;
  }

  // Start and update the timer during normal gameplay only.
  if (!editMode) {
    if (
      (keys.left || keys.right || keys.jump || keys.down) &&
      startTime === null
    ) {
      startTime = performance.now();
    }

    if (startTime !== null) {
      elapsedTime = performance.now() - startTime;
    }
  }

  // Horizontal movement works in both modes.
  if (keys.left) {
    player.x -= player.speed;
  }

  if (keys.right) {
    player.x += player.speed;
  }

  // Keep player inside the world horizontally.
  player.x = Math.max(
    0,
    Math.min(worldWidth - player.width, player.x)
  );

  if (editMode) {

    // Build Mode: free movement.
    // No gravity or platform collision.
    if (keys.jump) {
      player.y -= player.speed;
    }

    if (keys.down) {
      player.y += player.speed;
    }

    // Keep player within the vertical building area.
    player.y = Math.max(
      -1000,
      Math.min(400 - player.height, player.y)
    );

    player.velocityY = 0;
    player.onGround = false;

  } else {

    // Normal jumping.
    if (keys.jump && player.onGround) {
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
      for (const platform of currentLevel.platforms) {

        // Pink platforms are always usable.
        // Other platforms require matching fruit.
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

        if (
          overlapsHorizontally &&
          crossedPlatformTop
        ) {
          player.y = platform.y - player.height;
          player.velocityY = 0;
          player.onGround = true;
          break;
        }
      }
    }
  }

  // Collect fruit and stars during normal gameplay only.
  if (!editMode) {

    // Collect fruit.
    for (const fruit of currentLevel.fruits) {
      if (!fruit.collected) {
        const distanceX =
          player.x + player.width / 2 - fruit.x;

        const distanceY =
          player.y + player.height / 2 - fruit.y;

        const distance = Math.sqrt(
          distanceX ** 2 + distanceY ** 2
        );

        if (distance < 25) {

          // Make previous fruit reappear.
          for (
            const previousFruit of currentLevel.fruits
          ) {
            previousFruit.collected = false;
          }

          // Hide newly collected fruit.
          fruit.collected = true;

          // Switch active platform colour.
          activePlatformColor = fruit.color;
        }
      }
    }

    // Collect stars.
    for (const star of currentLevel.stars) {
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
          currentLevel.score++;
        }
      }
    }

    // Check level completion.
    if (
      currentLevel.stars.length > 0 &&
      currentLevel.stars.every(star => star.collected)
    ) {
      currentLevel.complete = true;
      levelCompleteTime = performance.now();
    }
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

  // Keep camera inside the level.
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

  // Limit vertical camera movement.
  camera.y = Math.max(
    -1000,
    Math.min(0, camera.y)
  );
}

// =====================================================
// MINI-MAP
// =====================================================

function drawMiniMap() {
  if (!editMode) return;

  const currentLevel = getCurrentLevel();

  const mapWidth = 240;
  const mapHeight = 150;

  const mapX = canvas.width - mapWidth - 15;
  const mapY = 15;

  const minY = -900;
  const maxY = 450;

  const scaleX = mapWidth / worldWidth;
  const scaleY = mapHeight / (maxY - minY);

  // Background.
  ctx.fillStyle = "rgba(0, 0, 0, 0.85)";
  ctx.fillRect(mapX, mapY, mapWidth, mapHeight);

  // Border.
  ctx.strokeStyle = "white";
  ctx.lineWidth = 2;
  ctx.strokeRect(mapX, mapY, mapWidth, mapHeight);

  // Platforms.
  for (const platform of currentLevel.platforms) {
    ctx.fillStyle = platform.color;

    ctx.fillRect(
      mapX + platform.x * scaleX,
      mapY + (platform.y - minY) * scaleY,
      Math.max(2, platform.width * scaleX),
      Math.max(2, platform.height * scaleY)
    );
  }

  // Fruit.
  for (const fruit of currentLevel.fruits) {
    ctx.fillStyle = fruit.color;

    ctx.fillRect(
      mapX + fruit.x * scaleX - 2,
      mapY + (fruit.y - minY) * scaleY - 2,
      4,
      4
    );
  }

  // Stars.
  for (const star of currentLevel.stars) {
    ctx.fillStyle = "#FFD700";

    ctx.fillRect(
      mapX + star.x * scaleX - 2,
      mapY + (star.y - minY) * scaleY - 2,
      4,
      4
    );
  }

  // Ground.
  ctx.fillStyle = "#1132a0";

  ctx.fillRect(
    mapX,
    mapY + (400 - minY) * scaleY,
    mapWidth,
    3
  );

  // Player.
  ctx.fillStyle = "yellow";

  ctx.fillRect(
    mapX + player.x * scaleX - 2,
    mapY + (player.y - minY) * scaleY - 2,
    5,
    5
  );

  // Title.
  ctx.fillStyle = "white";
  ctx.font = "12px Arial";
  ctx.textAlign = "left";

  ctx.fillText(
    "LEVEL OVERVIEW",
    mapX + 8,
    mapY + 13
  );
}

// =====================================================
// DRAW GAME
// =====================================================

function draw() {
  const currentLevel = getCurrentLevel();

  ctx.clearRect(
    0,
    0,
    canvas.width,
    canvas.height
  );

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
  for (
    let i = 0;
    i < currentLevel.platforms.length;
    i++
  ) {
    const platform = currentLevel.platforms[i];

    const canUsePlatform =
      platform.color === "pink" ||
      platform.color === activePlatformColor;

    // Make unusable platforms transparent.
    ctx.globalAlpha = canUsePlatform ? 1 : 0.3;

    ctx.fillStyle =
      platformColors[platform.color] || "#ffffff";

    ctx.fillRect(
      platform.x,
      platform.y,
      platform.width,
      platform.height
    );

    // Build Mode outlines and coordinates.
    if (editMode) {
      ctx.globalAlpha = 1;

      ctx.strokeStyle = "white";
      ctx.lineWidth = 2;

      ctx.strokeRect(
        platform.x,
        platform.y,
        platform.width,
        platform.height
      );

      ctx.fillStyle = "white";
      ctx.font = "12px Arial";
      ctx.textAlign = "left";

      ctx.fillText(
        `#${i + 1} (${platform.x}, ${platform.y})`,
        platform.x,
        platform.y - 8
      );
    }
  }

  ctx.globalAlpha = 1;

  // Draw stars.
  for (const star of currentLevel.stars) {
    if (!star.collected) {
      drawStar(star.x, star.y, 12);

      if (editMode) {
        ctx.fillStyle = "white";
        ctx.font = "11px Arial";
        ctx.textAlign = "left";

        ctx.fillText(
          `(${star.x}, ${star.y})`,
          star.x + 12,
          star.y
        );
      }
    }
  }

  // Draw fruit.
  for (const fruit of currentLevel.fruits) {
    if (!fruit.collected) {
      drawFruit(fruit.x, fruit.y, fruit.color);

      if (editMode) {
        ctx.fillStyle = "white";
        ctx.font = "11px Arial";
        ctx.textAlign = "left";

        ctx.fillText(
          `(${fruit.x}, ${fruit.y})`,
          fruit.x + 12,
          fruit.y
        );
      }
    }
  }

  // Draw walls.
  ctx.fillStyle = "#1132a0";

  ctx.fillRect(-10, -1000, 10, 1450);
  ctx.fillRect(worldWidth, -1000, 10, 1450);

  // Draw player.
  if (
    playerImage.complete &&
    playerImage.naturalWidth > 0
  ) {
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

  // Mini-map.
  drawMiniMap();

  // Score.
  ctx.fillStyle = "white";
  ctx.font = "24px Arial";
  ctx.textAlign = "left";

  ctx.fillText(
    "Stars: " +
      currentLevel.score +
      "/" +
      currentLevel.stars.length,
    20,
    35
  );

  // Active colour.
  ctx.fillText(
    "Platform: " + (activePlatformColor || "None"),
    20,
    65
  );

  // Timer.
  if (showTimer) {
    const totalSeconds = Math.floor(
      elapsedTime / 1000
    );

    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    const milliseconds = Math.floor(
      elapsedTime % 1000
    );

    const timeText =
      minutes +
      ":" +
      String(seconds).padStart(2, "0") +
      "." +
      String(milliseconds).padStart(3, "0");

    ctx.fillText(
      "Time: " + timeText,
      20,
      95
    );
  }

  // Build Mode indicator.
  if (editMode) {
    ctx.fillStyle = "rgba(0, 0, 0, 0.75)";
    ctx.fillRect(15, 115, 150, 30);

    ctx.fillStyle = "#7df9ff";
    ctx.font = "13px Arial";

    ctx.fillText(
      "BUILD MODE: ON",
      25,
      135
    );
  }

  // Level completion and victory screens.
  // Hide these while building so the level remains visible.
  if (!editMode && (currentLevel.complete || gameFinished)) {

    // Dark transparent background.
    ctx.fillStyle = "rgba(0, 0, 0, 0.75)";
    ctx.fillRect(
      0,
      0,
      canvas.width,
      canvas.height
    );

    ctx.textAlign = "center";

    if (gameFinished) {

      // Final victory screen.
      ctx.fillStyle = "#FFD700";
      ctx.font = "bold 48px Arial";

      ctx.fillText(
        "YOU WIN!",
        canvas.width / 2,
        canvas.height / 2
      );

      ctx.fillStyle = "white";
      ctx.font = "20px Arial";

      ctx.fillText(
        "You've completed every level!",
        canvas.width / 2,
        canvas.height / 2 + 45
      );

    } else {

      // Normal level completion screen.
      ctx.fillStyle = "#7df9ff";
      ctx.font = "bold 40px Arial";

      ctx.fillText(
        "LEVEL COMPLETE!",
        canvas.width / 2,
        canvas.height / 2
      );

      ctx.fillStyle = "white";
      ctx.font = "20px Arial";

      ctx.fillText(
        "Get ready for the next level...",
        canvas.width / 2,
        canvas.height / 2 + 40
      );
    }
  }
}

// =====================================================
// MAIN GAME LOOP
// =====================================================

function gameLoop() {
  update();
  draw();

  requestAnimationFrame(gameLoop);
}

gameLoop();
