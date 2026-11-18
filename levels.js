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

    {
    "name": "Level 2",
    "platforms": [
      // RED - Starting section
      {"x":25,"y":331,"width":145,"height":10,"color":"red"},
      {"x":198,"y":270,"width":78,"height":10,"color":"red"},
      {"x":315,"y":315,"width":62,"height":10,"color":"red"},
      {"x":395,"y":215,"width":108,"height":10,"color":"red"},
      {"x":545,"y":170,"width":70,"height":10,"color":"red"},
      {"x":650,"y":230,"width":92,"height":10,"color":"red"},
      {"x":785,"y":140,"width":105,"height":10,"color":"red"},

      // RED - Alternative upper route
      {"x":258,"y":175,"width":70,"height":10,"color":"red"},
      {"x":388,"y":112,"width":85,"height":10,"color":"red"},
      {"x":535,"y":65,"width":70,"height":10,"color":"red"},
      {"x":695,"y":98,"width":62,"height":10,"color":"red"},

      // BLUE - First colour switch
      {"x":860,"y":20,"width":100,"height":10,"color":"blue"},
      {"x":1000,"y":-65,"width":75,"height":10,"color":"blue"},
      {"x":1115,"y":-5,"width":65,"height":10,"color":"blue"},
      {"x":1220,"y":-115,"width":110,"height":10,"color":"blue"},
      {"x":1375,"y":-175,"width":70,"height":10,"color":"blue"},
      {"x":1480,"y":-90,"width":110,"height":10,"color":"blue"},
      {"x":1635,"y":-195,"width":75,"height":10,"color":"blue"},
      {"x":1755,"y":-255,"width":100,"height":10,"color":"blue"},

      // GREEN - Second colour switch
      {"x":1920,"y":-325,"width":105,"height":10,"color":"green"},
      {"x":2075,"y":-250,"width":70,"height":10,"color":"green"},
      {"x":2185,"y":-345,"width":110,"height":10,"color":"green"},
      {"x":2340,"y":-280,"width":65,"height":10,"color":"green"},
      {"x":2440,"y":-390,"width":115,"height":10,"color":"green"},
      {"x":2595,"y":-450,"width":70,"height":10,"color":"green"},
      {"x":2270,"y":-455,"width":70,"height":10,"color":"green"},

      // PINK - Third colour switch
      {"x":2755,"y":-515,"width":115,"height":10,"color":"pink"},
      {"x":2915,"y":-435,"width":75,"height":10,"color":"pink"},
      {"x":3035,"y":-540,"width":100,"height":10,"color":"pink"},
      {"x":3185,"y":-470,"width":65,"height":10,"color":"pink"},
      {"x":3290,"y":-580,"width":110,"height":10,"color":"pink"},
      {"x":3445,"y":-645,"width":75,"height":10,"color":"pink"},

      // RED - Final section
      {"x":3605,"y":-710,"width":130,"height":10,"color":"red"},
      {"x":3785,"y":-645,"width":85,"height":10,"color":"red"},
      {"x":3910,"y":-745,"width":115,"height":10,"color":"red"}
    ],

    "fruits": [
      {"x":95,"y":300,"color":"red","collected":false},
      {"x":790,"y":55,"color":"blue","collected":false},
      {"x":1845,"y":-300,"color":"green","collected":false},
      {"x":2680,"y":-490,"color":"pink","collected":false},
      {"x":3525,"y":-685,"color":"red","collected":false}
    ],

    "stars": [
      {"x":215,"y":238,"collected":false},
      {"x":410,"y":80,"collected":false},
      {"x":575,"y":25,"collected":false},
      {"x":1020,"y":-45,"collected":false},
      {"x":1450,"y":-135,"collected":false},
      {"x":1710,"y":-290,"collected":false},
      {"x":2140,"y":-295,"collected":false},
      {"x":2475,"y":-425,"collected":false},
      {"x":2820,"y":-560,"collected":false},
      {"x":3235,"y":-615,"collected":false},
      {"x":3830,"y":-700,"collected":false}
    ]
  },

  {
    "name": "Level 3",
    "platforms": [

      // RED - Starting area
      {"x":25,"y":331,"width":145,"height":10,"color":"red"},
      {"x":195,"y":280,"width":75,"height":10,"color":"red"},
      {"x":320,"y":315,"width":65,"height":10,"color":"red"},
      {"x":395,"y":215,"width":110,"height":10,"color":"red"},
      {"x":545,"y":170,"width":70,"height":10,"color":"red"},
      {"x":655,"y":230,"width":95,"height":10,"color":"red"},
      {"x":790,"y":135,"width":90,"height":10,"color":"red"},
      {"x":915,"y":80,"width":105,"height":10,"color":"red"},

      // RED - Upper alternative route
      {"x":255,"y":180,"width":75,"height":10,"color":"red"},
      {"x":375,"y":110,"width":65,"height":10,"color":"red"},
      {"x":510,"y":52,"width":80,"height":10,"color":"red"},
      {"x":665,"y":85,"width":70,"height":10,"color":"red"},

      // PINK - First colour change
      {"x":1090,"y":15,"width":115,"height":10,"color":"pink"},
      {"x":1220,"y":-65,"width":75,"height":10,"color":"pink"},
      {"x":1090,"y":-125,"width":70,"height":10,"color":"pink"},
      {"x":950,"y":-55,"width":100,"height":10,"color":"pink"},
      {"x":820,"y":-135,"width":65,"height":10,"color":"pink"},
      {"x":690,"y":-205,"width":105,"height":10,"color":"pink"},
      {"x":535,"y":-250,"width":75,"height":10,"color":"pink"},
      {"x":400,"y":-180,"width":90,"height":10,"color":"pink"},
      {"x":260,"y":-245,"width":75,"height":10,"color":"pink"},

      // PINK - Difficult side platforms
      {"x":875,"y":-225,"width":65,"height":10,"color":"pink"},
      {"x":740,"y":-280,"width":65,"height":10,"color":"pink"},

      // BLUE - Second colour change
      {"x":80,"y":-315,"width":105,"height":10,"color":"blue"},
      {"x":225,"y":-390,"width":70,"height":10,"color":"blue"},
      {"x":350,"y":-455,"width":110,"height":10,"color":"blue"},
      {"x":505,"y":-395,"width":65,"height":10,"color":"blue"},
      {"x":615,"y":-505,"width":105,"height":10,"color":"blue"},
      {"x":765,"y":-565,"width":75,"height":10,"color":"blue"},
      {"x":895,"y":-485,"width":110,"height":10,"color":"blue"},
      {"x":430,"y":-540,"width":60,"height":10,"color":"blue"},

      // GREEN - Third colour change
      {"x":1075,"y":-555,"width":115,"height":10,"color":"green"},
      {"x":1225,"y":-635,"width":70,"height":10,"color":"green"},
      {"x":1110,"y":-700,"width":110,"height":10,"color":"green"},
      {"x":965,"y":-640,"width":65,"height":10,"color":"green"},
      {"x":845,"y":-750,"width":110,"height":10,"color":"green"},
      {"x":695,"y":-815,"width":75,"height":10,"color":"green"},
      {"x":550,"y":-735,"width":100,"height":10,"color":"green"},

      // RED - Fourth colour change
      {"x":350,"y":-810,"width":110,"height":10,"color":"red"},
      {"x":500,"y":-900,"width":70,"height":10,"color":"red"},
      {"x":640,"y":-965,"width":110,"height":10,"color":"red"},
      {"x":795,"y":-905,"width":65,"height":10,"color":"red"},
      {"x":905,"y":-1015,"width":105,"height":10,"color":"red"},
      {"x":1060,"y":-1080,"width":75,"height":10,"color":"red"},

      // BLUE - Fifth colour change
      {"x":1230,"y":-1150,"width":110,"height":10,"color":"blue"},
      {"x":1390,"y":-1070,"width":75,"height":10,"color":"blue"},
      {"x":1510,"y":-1175,"width":110,"height":10,"color":"blue"},
      {"x":1665,"y":-1235,"width":65,"height":10,"color":"blue"},
      {"x":1770,"y":-1145,"width":100,"height":10,"color":"blue"},

      // PINK - Final colour change
      {"x":1940,"y":-1210,"width":125,"height":10,"color":"pink"},
      {"x":2110,"y":-1130,"width":80,"height":10,"color":"pink"},
      {"x":2235,"y":-1235,"width":110,"height":10,"color":"pink"},
      {"x":2390,"y":-1170,"width":140,"height":10,"color":"pink"}
    ],

    "fruits": [
      {"x":95,"y":300,"color":"red","collected":false},
      {"x":1035,"y":45,"color":"pink","collected":false},
      {"x":170,"y":-290,"color":"blue","collected":false},
      {"x":995,"y":-530,"color":"green","collected":false},
      {"x":450,"y":-780,"color":"red","collected":false},
      {"x":1150,"y":-1120,"color":"blue","collected":false},
      {"x":1860,"y":-1185,"color":"pink","collected":false}
    ],

    "stars": [
      {"x":230,"y":235,"collected":false},
      {"x":405,"y":70,"collected":false},
      {"x":700,"y":45,"collected":false},
      {"x":950,"y":-85,"collected":false},
      {"x":670,"y":-255,"collected":false},
      {"x":120,"y":-275,"collected":false},
      {"x":520,"y":-425,"collected":false},
      {"x":850,"y":-520,"collected":false},
      {"x":1100,"y":-520,"collected":false},
      {"x":970,"y":-675,"collected":false},
      {"x":570,"y":-785,"collected":false},
      {"x":430,"y":-850,"collected":false},
      {"x":930,"y":-970,"collected":false},
      {"x":1280,"y":-1110,"collected":false},
      {"x":1645,"y":-1275,"collected":false},
      {"x":2010,"y":-1170,"collected":false},
      {"x":2290,"y":-1200,"collected":false}
    ]
  }