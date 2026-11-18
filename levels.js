/* Skybound level data. This file is loaded by game.js. */
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
  {
    "name": "Level 2",
    "platforms": [
      // Main route
      {"x":55,"y":330,"width":110,"height":10,"color":"red"},
      {"x":220,"y":280,"width":100,"height":10,"color":"pink"},
      {"x":385,"y":320,"width":95,"height":10,"color":"blue"},
      {"x":550,"y":245,"width":105,"height":10,"color":"blue"},
      {"x":715,"y":295,"width":100,"height":10,"color":"pink"},
      {"x":880,"y":240,"width":100,"height":10,"color":"green"},
      {"x":1045,"y":175,"width":100,"height":10,"color":"green"},
      {"x":1210,"y":235,"width":100,"height":10,"color":"pink"},
      {"x":1375,"y":175,"width":100,"height":10,"color":"red"},
      {"x":1540,"y":110,"width":100,"height":10,"color":"red"},
      {"x":1705,"y":175,"width":100,"height":10,"color":"pink"},
      {"x":1870,"y":110,"width":100,"height":10,"color":"blue"},

      // Alternative platforms
      {"x":115,"y":210,"width":80,"height":10,"color":"pink"},
      {"x":520,"y":155,"width":85,"height":10,"color":"pink"},
      {"x":675,"y":95,"width":80,"height":10,"color":"blue"},
      {"x":825,"y":125,"width":85,"height":10,"color":"pink"},
      {"x":990,"y":80,"width":85,"height":10,"color":"pink"},
      {"x":1135,"y":305,"width":85,"height":10,"color":"pink"},
      {"x":1355,"y":250,"width":85,"height":10,"color":"pink"},
      {"x":1595,"y":265,"width":85,"height":10,"color":"pink"},
      {"x":1795,"y":25,"width":85,"height":10,"color":"pink"},
      {"x":1660,"y":5,"width":80,"height":10,"color":"pink"}
    ],
    "fruits": [
      {"x":110,"y":380,"color":"red","collected":false},
      {"x":270,"y":260,"color":"blue","collected":false},
      {"x":765,"y":275,"color":"green","collected":false},
      {"x":1260,"y":215,"color":"red","collected":false},
      {"x":1755,"y":155,"color":"blue","collected":false}
    ],
    "stars": [
      {"x":145,"y":310,"collected":false},
      {"x":430,"y":300,"collected":false},
      {"x":595,"y":225,"collected":false},
      {"x":925,"y":220,"collected":false},
      {"x":1090,"y":155,"collected":false},
      {"x":1420,"y":155,"collected":false},
      {"x":1585,"y":90,"collected":false},
      {"x":1915,"y":90,"collected":false},
      {"x":155,"y":190,"collected":false},
      {"x":560,"y":135,"collected":false},
      {"x":715,"y":75,"collected":false},
      {"x":865,"y":105,"collected":false},
      {"x":1030,"y":60,"collected":false},
      {"x":1175,"y":285,"collected":false},
      {"x":1395,"y":230,"collected":false},
      {"x":1637,"y":245,"collected":false},
      {"x":1700,"y":-15,"collected":false}
    ]
  },
  {
    "name": "Level 3",
    "platforms": [
      // Starting section and first junction
      {"x":55,"y":330,"width":110,"height":10,"color":"red"},
      {"x":220,"y":280,"width":100,"height":10,"color":"pink"},

      // Upper route
      {"x":385,"y":210,"width":95,"height":10,"color":"blue"},
      {"x":550,"y":260,"width":100,"height":10,"color":"pink"},
      {"x":715,"y":190,"width":95,"height":10,"color":"green"},
      {"x":880,"y":240,"width":100,"height":10,"color":"pink"},
      {"x":1045,"y":170,"width":95,"height":10,"color":"red"},
      {"x":1210,"y":225,"width":100,"height":10,"color":"pink"},

      // Lower route - reconnects with the upper route
      {"x":365,"y":350,"width":100,"height":10,"color":"pink"},
      {"x":530,"y":300,"width":95,"height":10,"color":"green"},
      {"x":695,"y":355,"width":100,"height":10,"color":"pink"},
      {"x":860,"y":295,"width":95,"height":10,"color":"blue"},
      {"x":1025,"y":350,"width":100,"height":10,"color":"pink"},
      {"x":1190,"y":285,"width":95,"height":10,"color":"red"},

      // Winding upper return route
      {"x":1110,"y":160,"width":90,"height":10,"color":"pink"},
      {"x":980,"y":95,"width":90,"height":10,"color":"blue"},
      {"x":850,"y":155,"width":90,"height":10,"color":"pink"},
      {"x":720,"y":85,"width":90,"height":10,"color":"green"},
      {"x":590,"y":150,"width":90,"height":10,"color":"pink"},
      {"x":460,"y":80,"width":90,"height":10,"color":"red"},
      {"x":330,"y":145,"width":90,"height":10,"color":"pink"},

      // Far-right upper route
      {"x":1375,"y":160,"width":95,"height":10,"color":"blue"},
      {"x":1535,"y":100,"width":95,"height":10,"color":"pink"},
      {"x":1695,"y":160,"width":95,"height":10,"color":"green"},
      {"x":1855,"y":100,"width":95,"height":10,"color":"pink"},

      // Far-right lower route
      {"x":1360,"y":290,"width":95,"height":10,"color":"pink"},
      {"x":1520,"y":350,"width":95,"height":10,"color":"green"},
      {"x":1680,"y":290,"width":95,"height":10,"color":"pink"},
      {"x":1840,"y":350,"width":95,"height":10,"color":"blue"},

      // Cross-links connecting the upper and lower routes
      {"x":1410,"y":220,"width":90,"height":10,"color":"pink"},
      {"x":1510,"y":165,"width":90,"height":10,"color":"pink"},
      {"x":1520,"y":235,"width":90,"height":10,"color":"pink"},
      {"x":1550,"y":300,"width":90,"height":10,"color":"pink"},
      {"x":1720,"y":220,"width":90,"height":10,"color":"pink"},
      {"x":1820,"y":160,"width":90,"height":10,"color":"pink"},
      {"x":1830,"y":230,"width":90,"height":10,"color":"pink"},
      {"x":1840,"y":300,"width":90,"height":10,"color":"pink"},

      // Side spur near the beginning
      {"x":205,"y":75,"width":85,"height":10,"color":"pink"},
      {"x":75,"y":135,"width":85,"height":10,"color":"blue"},

      // Lower return spur
      {"x":800,"y":390,"width":85,"height":10,"color":"pink"},
      {"x":945,"y":390,"width":85,"height":10,"color":"red"},

      // High-sky arc: another way to reach the far-right section
      {"x":1110,"y":90,"width":90,"height":10,"color":"pink"},
      {"x":1240,"y":20,"width":90,"height":10,"color":"blue"},
      {"x":1370,"y":-50,"width":90,"height":10,"color":"pink"},
      {"x":1500,"y":-120,"width":90,"height":10,"color":"green"},
      {"x":1630,"y":-190,"width":90,"height":10,"color":"pink"},
      {"x":1760,"y":-120,"width":90,"height":10,"color":"blue"},
      {"x":1890,"y":-50,"width":90,"height":10,"color":"pink"},
      {"x":1890,"y":20,"width":90,"height":10,"color":"pink"}
    ],
    "fruits": [
      {"x":110,"y":380,"color":"red","collected":false},
      {"x":270,"y":260,"color":"blue","collected":false},
      {"x":600,"y":240,"color":"green","collected":false},
      {"x":930,"y":220,"color":"red","collected":false},
      {"x":1260,"y":205,"color":"blue","collected":false},
      {"x":415,"y":330,"color":"green","collected":false},
      {"x":745,"y":335,"color":"blue","collected":false},
      {"x":1075,"y":330,"color":"red","collected":false},
      {"x":1155,"y":140,"color":"pink","collected":false},
      {"x":895,"y":135,"color":"green","collected":false},
      {"x":635,"y":130,"color":"blue","collected":false},
      {"x":375,"y":125,"color":"red","collected":false},
      {"x":1582,"y":80,"color":"green","collected":false},
      {"x":1880,"y":80,"color":"red","collected":false},
      {"x":1405,"y":270,"color":"blue","collected":false},
      {"x":1725,"y":270,"color":"red","collected":false},
      {"x":1155,"y":70,"color":"blue","collected":false},
      {"x":1415,"y":-70,"color":"green","collected":false},
      {"x":1675,"y":-210,"color":"blue","collected":false}
    ],
    "stars": [
      {"x":430,"y":190,"collected":false},
      {"x":760,"y":170,"collected":false},
      {"x":1090,"y":150,"collected":false},
      {"x":575,"y":280,"collected":false},
      {"x":905,"y":275,"collected":false},
      {"x":1235,"y":265,"collected":false},
      {"x":1025,"y":75,"collected":false},
      {"x":765,"y":65,"collected":false},
      {"x":505,"y":60,"collected":false},
      {"x":1422,"y":140,"collected":false},
      {"x":1742,"y":140,"collected":false},
      {"x":1567,"y":330,"collected":false},
      {"x":1887,"y":330,"collected":false},
      {"x":1455,"y":200,"collected":false},
      {"x":1555,"y":145,"collected":false},
      {"x":1565,"y":215,"collected":false},
      {"x":1595,"y":280,"collected":false},
      {"x":1765,"y":200,"collected":false},
      {"x":1865,"y":140,"collected":false},
      {"x":1875,"y":210,"collected":false},
      {"x":1885,"y":280,"collected":false},
      {"x":247,"y":55,"collected":false},
      {"x":117,"y":115,"collected":false},
      {"x":842,"y":370,"collected":false},
      {"x":987,"y":370,"collected":false},
      {"x":1285,"y":0,"collected":false},
      {"x":1545,"y":-140,"collected":false},
      {"x":1805,"y":-140,"collected":false},
      {"x":1935,"y":-70,"collected":false},
      {"x":1935,"y":0,"collected":false}
    ]
  }
];