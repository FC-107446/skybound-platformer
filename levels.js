/* Skybound level data. This file is loaded by game.js */

// These helpers turn compact coordinate data into game objects.
const makePlatforms = (items) => items.map(([x, y, width, color, height = 10]) => ({
  x, y, width, height, color
}));

const makeFruits = (items) => items.map(([x, y, color]) => ({
  x, y, color, collected: false
}));

const makeStars = (items) => items.map(([x, y]) => ({
  x, y, collected: false
}));

window.SKYBOUND_LEVELS = [

  // ==========================================
  // LEVEL 1 - ORIGINAL LEVEL (UNCHANGED)
  // ==========================================

  {
    "name": "Level 1",
    "platforms": [
      {"x":200,"y":330,"width":140,"height":10,"color":"red"},
      {"x":300,"y":50,"width":70,"height":10,"color":"blue"},
      {"x":400,"y":110,"width":40,"height":10,"color":"green"},
      {"x":0,"y":150,"width":180,"height":10,"color":"pink"},
      {"x":200,"y":200,"width":80,"height":10,"color":"blue"},
      {"x":400,"y":260,"width":140,"height":10,"color":"blue"},
      {"x":600,"y":320,"width":120,"height":10,"color":"red"},
      {"x":760,"y":140,"width":140,"height":12,"color":"red"},
      {"x":980,"y":210,"width":130,"height":10,"color":"green"},
      {"x":1200,"y":280,"width":160,"height":10,"color":"red"},
      {"x":1150,"y":155,"width":180,"height":10,"color":"green"},
      {"x":1450,"y":220,"width":140,"height":10,"color":"blue"},
      {"x":600,"y":100,"width":100,"height":10,"color":"blue"},
      {"x":100,"y":100,"width":120,"height":10,"color":"pink"},
      {"x":900,"y":100,"width":120,"height":10,"color":"pink"},
      {"x":1400,"y":-100,"width":120,"height":10,"color":"pink"},
      {"x":1900,"y":-400,"width":120,"height":10,"color":"pink"},
      {"x":640,"y":200,"width":70,"height":10,"color":"pink"},
      {"x":740,"y":270,"width":80,"height":10,"color":"pink"}
    ],
    "fruits": [
      {"x":300,"y":290,"color":"red","collected":false},
      {"x":500,"y":220,"color":"blue","collected":false},
      {"x":1350,"y":240,"color":"blue","collected":false},
      {"x":60,"y":120,"color":"red","collected":false},
      {"x":340,"y":30,"color":"green","collected":false},
      {"x":830,"y":250,"color":"red","collected":false},
      {"x":900,"y":100,"color":"green","collected":false},
      {"x":1350,"y":80,"color":"red","collected":false}
    ],
    "stars": [
      {"x":220,"y":180,"collected":false},
      {"x":420,"y":80,"collected":false},
      {"x":680,"y":180,"collected":false},
      {"x":1050,"y":250,"collected":false},
      {"x":1350,"y":170,"collected":false},
      {"x":1600,"y":200,"collected":false}
    ]
  },

  // ==========================================
  // LEVEL 2 - THE SHATTERED SKY
  // ==========================================

  {
    name: "Level 2",

    platforms: makePlatforms([
      // Main upper route
      [27,331,150,"red"],
      [165,266,105,"blue"],
      [300,205,95,"pink"],
      [430,146,110,"green"],
      [575,88,95,"blue"],
      [705,30,110,"red"],
      [855,-30,100,"green"],
      [995,28,100,"pink"],
      [1135,88,110,"blue"],
      [1285,27,100,"red"],
      [1425,-35,110,"green"],
      [1575,25,95,"blue"],
      [1710,88,110,"pink"],
      [1860,25,110,"red"],
      [2010,-40,100,"green"],
      [2150,20,120,"blue"],
      [2315,-48,135,"red"],

      // Middle alternative route
      [92,245,82,"pink"],
      [220,184,82,"green"],
      [345,123,82,"blue"],
      [470,63,82,"pink"],
      [595,4,82,"green"],
      [720,-57,82,"blue"],
      [850,-118,82,"red"],
      [985,-58,82,"green"],
      [1115,3,82,"pink"],
      [1245,-58,82,"blue"],
      [1375,-120,82,"red"],
      [1505,-58,82,"green"],
      [1635,3,82,"blue"],
      [1765,-58,82,"pink"],
      [1895,-120,82,"red"],
      [2025,-58,82,"green"],
      [2155,-120,82,"blue"],
      [2285,-180,100,"pink"],

      // Lower recovery route
      [265,350,95,"blue"],
      [405,302,90,"green"],
      [545,350,95,"pink"],
      [685,300,90,"red"],
      [825,350,100,"blue"],
      [975,302,90,"green"],
      [1120,350,100,"pink"],
      [1270,300,90,"red"],
      [1410,350,100,"blue"],
      [1560,300,90,"green"],
      [1700,350,100,"pink"],
      [1850,300,90,"red"],
      [1990,350,100,"blue"],
      [2140,300,90,"green"],
      [2280,350,120,"pink"]
    ]),

    fruits: makeFruits([
      [95,205,"red"],
      [365,105,"green"],
      [620,50,"blue"],
      [900,-70,"red"],
      [1165,48,"green"],
      [1455,-75,"blue"],
      [1745,48,"red"],
      [2045,-75,"green"],
      [2345,-85,"blue"],
      [1015,265,"red"],
      [1585,263,"green"]
    ]),

    stars: makeStars([
      [250,145],
      [505,25],
      [745,-95],
      [1015,-105],
      [1270,-105],
      [1535,-105],
      [1795,-105],
      [2055,-105],
      [2320,-225],
      [1885,260]
    ])
  },

  // ==========================================
  // LEVEL 3 - THE SKY SPIRE
  // ==========================================

  {
    name: "Level 3",

    platforms: makePlatforms([

      // Main climbing route
      [25,331,155,"red"],
      [175,265,85,"pink"],
      [300,202,80,"blue"],
      [420,139,85,"green"],
      [545,76,78,"blue"],
      [665,13,90,"red"],
      [795,-50,78,"pink"],
      [915,-113,85,"green"],
      [1040,-176,78,"blue"],
      [1165,-113,85,"red"],
      [1290,-176,78,"pink"],
      [1415,-239,85,"green"],
      [1540,-302,78,"blue"],
      [1665,-365,90,"red"],
      [1800,-302,78,"pink"],
      [1925,-365,85,"green"],
      [2050,-428,78,"blue"],
      [2175,-491,95,"red"],
      [2315,-428,78,"pink"],
      [2440,-491,85,"green"],
      [2565,-554,78,"blue"],
      [2690,-617,95,"red"],
      [2830,-554,80,"pink"],
      [2960,-617,130,"green"],

      // Narrow upper challenge route
      [105,205,70,"blue"],
      [225,143,70,"red"],
      [345,80,70,"pink"],
      [465,18,70,"green"],
      [585,-45,70,"blue"],
      [705,-108,70,"red"],
      [825,-170,70,"pink"],
      [945,-232,70,"green"],
      [1065,-170,70,"blue"],
      [1185,-108,70,"red"],
      [1305,-170,70,"pink"],
      [1425,-232,70,"green"],
      [1545,-295,70,"blue"],
      [1665,-358,70,"red"],
      [1785,-420,70,"pink"],
      [1905,-358,70,"green"],
      [2025,-420,70,"blue"],
      [2145,-483,70,"red"],
      [2265,-545,70,"pink"],
      [2385,-483,70,"green"],
      [2505,-545,70,"blue"],
      [2625,-608,70,"red"],
      [2745,-670,70,"pink"],
      [2865,-608,70,"green"],

      // Lower alternative route
      [260,330,85,"green"],
      [390,278,85,"blue"],
      [520,330,85,"pink"],
      [650,278,85,"green"],
      [780,330,85,"blue"],
      [910,278,85,"pink"],
      [1040,330,85,"red"],
      [1170,278,85,"green"],
      [1300,330,85,"blue"],
      [1430,278,85,"pink"],
      [1560,330,85,"red"],
      [1690,278,85,"green"],
      [1820,330,85,"blue"],
      [1950,278,85,"pink"],
      [2080,330,85,"red"],
      [2210,278,85,"green"],
      [2340,330,85,"blue"],
      [2470,278,85,"pink"],
      [2600,330,85,"red"],
      [2730,278,85,"green"],
      [2860,330,100,"blue"]

    ]),

    fruits: makeFruits([
      [115,165,"red"],
      [445,99,"green"],
      [695,-27,"blue"],
      [965,-153,"red"],
      [1205,-153,"green"],
      [1455,-279,"blue"],
      [1695,-405,"red"],
      [1945,-405,"green"],
      [2205,-531,"blue"],
      [2475,-531,"red"],
      [2720,-657,"green"],
      [2995,-657,"blue"]
    ]),

    stars: makeStars([
      [245,100],
      [485,-25],
      [725,-170],
      [965,-292],
      [1090,-230],
      [1330,-292],
      [1575,-355],
      [1815,-450],
      [2055,-480],
      [2295,-575],
      [2535,-605],
      [2780,-700],
      [2910,-640]
    ])
  }

];