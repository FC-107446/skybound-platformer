/* Skybound level data. This file is loaded by game.js */
window.SKYBOUND_LEVELS = [
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

  // LEVEL 2: THE COLOUR-SWITCH MAZE
  // Fruit sequence: red -> blue -> green -> pink -> red.
  {
    "name": "Level 2",
    "platforms": [
      // RED SECTION
      {"x":25,"y":331,"width":145,"height":10,"color":"red"},
      {"x":205,"y":270,"width":85,"height":10,"color":"red"},
      {"x":345,"y":315,"width":70,"height":10,"color":"red"},
      {"x":445,"y":220,"width":105,"height":10,"color":"red"},
      {"x":590,"y":170,"width":75,"height":10,"color":"red"},
      {"x":705,"y":235,"width":85,"height":10,"color":"red"},
      {"x":835,"y":145,"width":100,"height":10,"color":"red"},
      {"x":970,"y":195,"width":80,"height":10,"color":"red"},

      // RED ALTERNATIVE ROUTE
      {"x":260,"y":175,"width":70,"height":10,"color":"red"},
      {"x":380,"y":115,"width":80,"height":10,"color":"red"},
      {"x":525,"y":120,"width":65,"height":10,"color":"red"},
      {"x":650,"y":65,"width":75,"height":10,"color":"red"},
      {"x":770,"y":95,"width":70,"height":10,"color":"red"},

      // BLUE SECTION
      {"x":1110,"y":130,"width":100,"height":10,"color":"blue"},
      {"x":1255,"y":195,"width":75,"height":10,"color":"blue"},
      {"x":1375,"y":90,"width":100,"height":10,"color":"blue"},
      {"x":1525,"y":145,"width":70,"height":10,"color":"blue"},
      {"x":1640,"y":35,"width":105,"height":10,"color":"blue"},
      {"x":1795,"y":100,"width":80,"height":10,"color":"blue"},

      // BLUE LOWER DETOUR
      {"x":1325,"y":280,"width":75,"height":10,"color":"blue"},
      {"x":1450,"y":330,"width":65,"height":10,"color":"blue"},
      {"x":1570,"y":270,"width":75,"height":10,"color":"blue"},

      // GREEN SECTION
      {"x":1930,"y":45,"width":100,"height":10,"color":"green"},
      {"x":2075,"y":110,"width":75,"height":10,"color":"green"},
      {"x":2190,"y":5,"width":100,"height":10,"color":"green"},
      {"x":2335,"y":75,"width":70,"height":10,"color":"green"},
      {"x":2450,"y":-35,"width":100,"height":10,"color":"green"},
      {"x":2600,"y":30,"width":85,"height":10,"color":"green"},

      // GREEN UPPER DETOUR
      {"x":2150,"y":-125,"width":75,"height":10,"color":"green"},
      {"x":2290,"y":-195,"width":65,"height":10,"color":"green"},
      {"x":2430,"y":-145,"width":80,"height":10,"color":"green"},

      // PINK SECTION
      {"x":2735,"y":-25,"width":105,"height":10,"color":"pink"},
      {"x":2890,"y":55,"width":80,"height":10,"color":"pink"},
      {"x":3015,"y":-50,"width":105,"height":10,"color":"pink"},
      {"x":3170,"y":15,"width":75,"height":10,"color":"pink"},
      {"x":3285,"y":-95,"width":110,"height":10,"color":"pink"},
      {"x":3440,"y":-30,"width":90,"height":10,"color":"pink"},

      // PINK LOWER DETOUR
      {"x":2900,"y":180,"width":80,"height":10,"color":"pink"},
      {"x":3040,"y":240,"width":70,"height":10,"color":"pink"},
      {"x":3190,"y":175,"width":85,"height":10,"color":"pink"},

      // FINAL RED SECTION
      {"x":3575,"y":-100,"width":115,"height":10,"color":"red"},
      {"x":3740,"y":-20,"width":90,"height":10,"color":"red"},
      {"x":3880,"y":-130,"width":135,"height":10,"color":"red"},
      {"x":3690,"y":-240,"width":75,"height":10,"color":"red"},
      {"x":3840,"y":-300,"width":85,"height":10,"color":"red"}
    ],
    "fruits": [
      {"x":95,"y":295,"color":"red","collected":false},
      {"x":1065,"y":150,"color":"blue","collected":false},
      {"x":1875,"y":55,"color":"green","collected":false},
      {"x":2675,"y":-5,"color":"pink","collected":false},
      {"x":3515,"y":-80,"color":"red","collected":false}
    ],
    "stars": [
      {"x":225,"y":235,"collected":false},
      {"x":405,"y":75,"collected":false},
      {"x":555,"y":80,"collected":false},
      {"x":690,"y":25,"collected":false},
      {"x":895,"y":105,"collected":false},
      {"x":1290,"y":150,"collected":false},
      {"x":1475,"y":285,"collected":false},
      {"x":1690,"y":-5,"collected":false},
      {"x":2145,"y":65,"collected":false},
      {"x":2315,"y":-230,"collected":false},
      {"x":2470,"y":-75,"collected":false},
      {"x":2940,"y":10,"collected":false},
      {"x":3070,"y":195,"collected":false},
      {"x":3330,"y":-140,"collected":false},
      {"x":3780,"y":-75,"collected":false},
      {"x":3915,"y":-185,"collected":false}
    ]
  },

  // LEVEL 3: THE FRACTURED SKY
  // Fruit sequence: red -> pink -> blue -> green -> blue -> red -> pink.
  {
    "name": "Level 3",
    "platforms": [
      // RED OPENING
      {"x":25,"y":331,"width":145,"height":10,"color":"red"},
      {"x":195,"y":280,"width":75,"height":10,"color":"red"},
      {"x":320,"y":315,"width":65,"height":10,"color":"red"},
      {"x":395,"y":215,"width":105,"height":10,"color":"red"},
      {"x":545,"y":170,"width":75,"height":10,"color":"red"},
      {"x":665,"y":235,"width":85,"height":10,"color":"red"},
      {"x":790,"y":135,"width":95,"height":10,"color":"red"},
      {"x":930,"y":80,"width":85,"height":10,"color":"red"},

      // RED ALTERNATIVE ROUTE
      {"x":255,"y":175,"width":70,"height":10,"color":"red"},
      {"x":380,"y":105,"width":75,"height":10,"color":"red"},
      {"x":525,"y":75,"width":65,"height":10,"color":"red"},
      {"x":680,"y":80,"width":75,"height":10,"color":"red"},
      {"x":1060,"y":135,"width":75,"height":10,"color":"red"},

      // PINK SWITCHBACK
      {"x":1175,"y":85,"width":95,"height":10,"color":"pink"},
      {"x":1050,"y":15,"width":75,"height":10,"color":"pink"},
      {"x":930,"y":-65,"width":85,"height":10,"color":"pink"},
      {"x":810,"y":5,"width":70,"height":10,"color":"pink"},
      {"x":685,"y":-110,"width":95,"height":10,"color":"pink"},
      {"x":560,"y":-40,"width":75,"height":10,"color":"pink"},
      {"x":430,"y":-155,"width":90,"height":10,"color":"pink"},
      {"x":300,"y":-85,"width":75,"height":10,"color":"pink"},
      {"x":170,"y":-205,"width":85,"height":10,"color":"pink"},
      {"x":45,"y":-135,"width":75,"height":10,"color":"pink"},

      // PINK UPPER DETOUR
      {"x":875,"y":-225,"width":65,"height":10,"color":"pink"},
      {"x":735,"y":-280,"width":65,"height":10,"color":"pink"},

      // FIRST BLUE SECTION
      {"x":15,"y":-230,"width":90,"height":10,"color":"blue"},
      {"x":150,"y":-305,"width":75,"height":10,"color":"blue"},
      {"x":290,"y":-245,"width":85,"height":10,"color":"blue"},
      {"x":430,"y":-370,"width":100,"height":10,"color":"blue"},
      {"x":575,"y":-300,"width":75,"height":10,"color":"blue"},
      {"x":720,"y":-425,"width":90,"height":10,"color":"blue"},
      {"x":865,"y":-350,"width":75,"height":10,"color":"blue"},
      {"x":1010,"y":-480,"width":100,"height":10,"color":"blue"},
      {"x":1155,"y":-405,"width":75,"height":10,"color":"blue"},
      {"x":1300,"y":-535,"width":100,"height":10,"color":"blue"},

      // BLUE DETOURS
      {"x":430,"y":-540,"width":65,"height":10,"color":"blue"},
      {"x":900,"y":-575,"width":65,"height":10,"color":"blue"},

      // GREEN SECTION
      {"x":1440,"y":-590,"width":100,"height":10,"color":"green"},
      {"x":1585,"y":-515,"width":75,"height":10,"color":"green"},
      {"x":1720,"y":-645,"width":95,"height":10,"color":"green"},
      {"x":1865,"y":-570,"width":75,"height":10,"color":"green"},
      {"x":2000,"y":-700,"width":100,"height":10,"color":"green"},
      {"x":2150,"y":-625,"width":75,"height":10,"color":"green"},
      {"x":2285,"y":-755,"width":95,"height":10,"color":"green"},
      {"x":2430,"y":-680,"width":75,"height":10,"color":"green"},
      {"x":2565,"y":-810,"width":100,"height":10,"color":"green"},

      // GREEN DETOURS
      {"x":1840,"y":-755,"width":70,"height":10,"color":"green"},
      {"x":2110,"y":-815,"width":70,"height":10,"color":"green"},

      // SECOND BLUE SECTION
      {"x":2705,"y":-855,"width":100,"height":10,"color":"blue"},
      {"x":2845,"y":-780,"width":75,"height":10,"color":"blue"},
      {"x":2980,"y":-905,"width":95,"height":10,"color":"blue"},
      {"x":3125,"y":-825,"width":75,"height":10,"color":"blue"},
      {"x":3260,"y":-955,"width":100,"height":10,"color":"blue"},
      {"x":3410,"y":-875,"width":75,"height":10,"color":"blue"},
      {"x":3550,"y":-1005,"width":100,"height":10,"color":"blue"},

      // BLUE DETOURS
      {"x":2970,"y":-1035,"width":70,"height":10,"color":"blue"},
      {"x":3300,"y":-1090,"width":70,"height":10,"color":"blue"},

      // RED SECTION
      {"x":3700,"y":-1060,"width":105,"height":10,"color":"red"},
      {"x":3850,"y":-985,"width":75,"height":10,"color":"red"},
      {"x":3985,"y":-1115,"width":95,"height":10,"color":"red"},
      {"x":4130,"y":-1035,"width":75,"height":10,"color":"red"},
      {"x":4270,"y":-1165,"width":100,"height":10,"color":"red"},

      // RED DETOURS
      {"x":3890,"y":-1190,"width":65,"height":10,"color":"red"},
      {"x":4160,"y":-1240,"width":65,"height":10,"color":"red"},

      // FINAL PINK SECTION
      {"x":4420,"y":-1225,"width":105,"height":10,"color":"pink"},
      {"x":4565,"y":-1145,"width":75,"height":10,"color":"pink"},
      {"x":4700,"y":-1275,"width":100,"height":10,"color":"pink"},
      {"x":4850,"y":-1195,"width":75,"height":10,"color":"pink"},
      {"x":4990,"y":-1325,"width":130,"height":10,"color":"pink"}
    ],
    "fruits": [
      {"x":95,"y":295,"color":"red","collected":false},
      {"x":1125,"y":105,"color":"pink","collected":false},
      {"x":90,"y":-185,"color":"blue","collected":false},
      {"x":1380,"y":-565,"color":"green","collected":false},
      {"x":2645,"y":-830,"color":"blue","collected":false},
      {"x":3635,"y":-1025,"color":"red","collected":false},
      {"x":4355,"y":-1190,"color":"pink","collected":false}
    ],
    "stars": [
      {"x":225,"y":235,"collected":false},
      {"x":420,"y":75,"collected":false},
      {"x":555,"y":115,"collected":false},
      {"x":835,"y":90,"collected":false},
      {"x":990,"y":-100,"collected":false},
      {"x":745,"y":-160,"collected":false},
      {"x":330,"y":-280,"collected":false},
      {"x":475,"y":-410,"collected":false},
      {"x":930,"y":-390,"collected":false},
      {"x":1190,"y":-445,"collected":false},
      {"x":1615,"y":-560,"collected":false},
      {"x":1870,"y":-800,"collected":false},
      {"x":2145,"y":-860,"collected":false},
      {"x":2470,"y":-710,"collected":false},
      {"x":2865,"y":-825,"collected":false},
      {"x":3160,"y":-870,"collected":false},
      {"x":3335,"y":-1135,"collected":false},
      {"x":3725,"y":-1105,"collected":false},
      {"x":4030,"y":-1155,"collected":false},
      {"x":4470,"y":-1260,"collected":false},
      {"x":4745,"y":-1310,"collected":false},
      {"x":5045,"y":-1360,"collected":false}
    ]
  }
];