// Eric Hughes May 9th 2017
/*THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

libraries used
-String.codePointAt polyfill (needed for IE support)
-String#fromCodePoint polyfill (needed for IE support)
-Twemoji library for converting emoji to codePoint for equality checking

Weather API
http://openweathermap.org/appid
*/
var g = {
  emojis: [{
      "number": 0,
      "emoji": "😀",
      "codePoint": 128512,
      "url": "/grinning-face/"
    },
    {
      "number": 1,
      "emoji": "😁",
      "codePoint": 128513,
      "url": "/grinning-face-with-smiling-eyes/"
    },
    {
      "number": 2,
      "emoji": "😂",
      "codePoint": 128514,
      "url": "/face-with-tears-of-joy/"
    },
    {
      "number": 3,
      "emoji": "😃",
      "codePoint": 128515,
      "url": "/smiling-face-with-open-mouth/"
    },
    {
      "number": 4,
      "emoji": "😄",
      "codePoint": 128516,
      "url": "/smiling-face-with-open-mouth-and-smiling-eyes/"
    },
    {
      "number": 5,
      "emoji": "😅",
      "codePoint": 128517,
      "url": "/smiling-face-with-open-mouth-and-cold-sweat/"
    },
    {
      "number": 6,
      "emoji": "😆",
      "codePoint": 128518,
      "url": "/smiling-face-with-open-mouth-and-tightly-closed-eyes/"
    },
    {
      "number": 7,
      "emoji": "😉",
      "codePoint": 128521,
      "url": "/winking-face/"
    },
    {
      "number": 8,
      "emoji": "😊",
      "codePoint": 128522,
      "url": "/smiling-face-with-smiling-eyes/"
    },
    {
      "number": 9,
      "emoji": "😋",
      "codePoint": 128523,
      "url": "/face-savouring-delicious-food/"
    },
    {
      "number": 10,
      "emoji": "😎",
      "codePoint": 128526,
      "url": "/smiling-face-with-sunglasses/"
    },
    {
      "number": 11,
      "emoji": "😍",
      "codePoint": 128525,
      "url": "/smiling-face-with-heart-shaped-eyes/"
    },
    {
      "number": 12,
      "emoji": "😘",
      "codePoint": 128536,
      "url": "/face-throwing-a-kiss/"
    },
    {
      "number": 13,
      "emoji": "😗",
      "codePoint": 128535,
      "url": "/kissing-face/"
    },
    {
      "number": 14,
      "emoji": "😙",
      "codePoint": 128537,
      "url": "/kissing-face-with-smiling-eyes/"
    },
    {
      "number": 15,
      "emoji": "😚",
      "codePoint": 128538,
      "url": "/kissing-face-with-closed-eyes/"
    },
    {
      "number": 17,
      "emoji": "🙂",
      "codePoint": 128578,
      "url": "/slightly-smiling-face/"
    },
    {
      "number": 18,
      "emoji": "🤗",
      "codePoint": 129303,
      "url": "/hugging-face/"
    },
    {
      "number": 19,
      "emoji": "😇",
      "codePoint": 128519,
      "url": "/smiling-face-with-halo/"
    },
    {
      "number": 20,
      "emoji": "🤔",
      "codePoint": 129300,
      "url": "/thinking-face/"
    },
    {
      "number": 21,
      "emoji": "😐",
      "codePoint": 128528,
      "url": "/neutral-face/"
    },
    {
      "number": 22,
      "emoji": "😑",
      "codePoint": 128529,
      "url": "/expressionless-face/"
    },
    {
      "number": 23,
      "emoji": "😶",
      "codePoint": 128566,
      "url": "/face-without-mouth/"
    },
    {
      "number": 24,
      "emoji": "🙄",
      "codePoint": 128580,
      "url": "/face-with-rolling-eyes/"
    },
    {
      "number": 25,
      "emoji": "😏",
      "codePoint": 128527,
      "url": "/smirking-face/"
    },
    {
      "number": 26,
      "emoji": "😣",
      "codePoint": 128547,
      "url": "/persevering-face/"
    },
    {
      "number": 27,
      "emoji": "😥",
      "codePoint": 128549,
      "url": "/disappointed-but-relieved-face/"
    },
    {
      "number": 28,
      "emoji": "😮",
      "codePoint": 128558,
      "url": "/face-with-open-mouth/"
    },
    {
      "number": 29,
      "emoji": "🤐",
      "codePoint": 129296,
      "url": "/zipper-mouth-face/"
    },
    {
      "number": 30,
      "emoji": "😯",
      "codePoint": 128559,
      "url": "/hushed-face/"
    },
    {
      "number": 31,
      "emoji": "😪",
      "codePoint": 128554,
      "url": "/sleepy-face/"
    },
    {
      "number": 32,
      "emoji": "😫",
      "codePoint": 128555,
      "url": "/tired-face/"
    },
    {
      "number": 33,
      "emoji": "😴",
      "codePoint": 128564,
      "url": "/sleeping-face/"
    },
    {
      "number": 34,
      "emoji": "😌",
      "codePoint": 128524,
      "url": "/relieved-face/"
    },
    {
      "number": 35,
      "emoji": "🤓",
      "codePoint": 129299,
      "url": "/nerd-face/"
    },
    {
      "number": 36,
      "emoji": "😛",
      "codePoint": 128539,
      "url": "/face-with-stuck-out-tongue/"
    },
    {
      "number": 37,
      "emoji": "😜",
      "codePoint": 128540,
      "url": "/face-with-stuck-out-tongue-and-winking-eye/"
    },
    {
      "number": 38,
      "emoji": "😝",
      "codePoint": 128541,
      "url": "/face-with-stuck-out-tongue-and-tightly-closed-eyes/"
    },
    {
      "number": 40,
      "emoji": "🙁",
      "codePoint": 128577,
      "url": "/slightly-frowning-face/"
    },
    {
      "number": 41,
      "emoji": "😒",
      "codePoint": 128530,
      "url": "/unamused-face/"
    },
    {
      "number": 42,
      "emoji": "😓",
      "codePoint": 128531,
      "url": "/face-with-cold-sweat/"
    },
    {
      "number": 43,
      "emoji": "😔",
      "codePoint": 128532,
      "url": "/pensive-face/"
    },
    {
      "number": 44,
      "emoji": "😕",
      "codePoint": 128533,
      "url": "/confused-face/"
    },
    {
      "number": 45,
      "emoji": "😖",
      "codePoint": 128534,
      "url": "/confounded-face/"
    },
    {
      "number": 46,
      "emoji": "🙃",
      "codePoint": 128579,
      "url": "/upside-down-face/"
    },
    {
      "number": 47,
      "emoji": "😷",
      "codePoint": 128567,
      "url": "/face-with-medical-mask/"
    },
    {
      "number": 48,
      "emoji": "🤒",
      "codePoint": 129298,
      "url": "/face-with-thermometer/"
    },
    {
      "number": 49,
      "emoji": "🤕",
      "codePoint": 129301,
      "url": "/face-with-head-bandage/"
    },
    {
      "number": 50,
      "emoji": "🤑",
      "codePoint": 129297,
      "url": "/money-mouth-face/"
    },
    {
      "number": 51,
      "emoji": "😲",
      "codePoint": 128562,
      "url": "/astonished-face/"
    },
    {
      "number": 52,
      "emoji": "😞",
      "codePoint": 128542,
      "url": "/disappointed-face/"
    },
    {
      "number": 53,
      "emoji": "😟",
      "codePoint": 128543,
      "url": "/worried-face/"
    },
    {
      "number": 54,
      "emoji": "😤",
      "codePoint": 128548,
      "url": "/face-with-look-of-triumph/"
    },
    {
      "number": 55,
      "emoji": "😢",
      "codePoint": 128546,
      "url": "/crying-face/"
    },
    {
      "number": 56,
      "emoji": "😭",
      "codePoint": 128557,
      "url": "/loudly-crying-face/"
    },
    {
      "number": 57,
      "emoji": "😦",
      "codePoint": 128550,
      "url": "/frowning-face-with-open-mouth/"
    },
    {
      "number": 58,
      "emoji": "😧",
      "codePoint": 128551,
      "url": "/anguished-face/"
    },
    {
      "number": 59,
      "emoji": "😨",
      "codePoint": 128552,
      "url": "/fearful-face/"
    },
    {
      "number": 60,
      "emoji": "😩",
      "codePoint": 128553,
      "url": "/weary-face/"
    },
    {
      "number": 61,
      "emoji": "😬",
      "codePoint": 128556,
      "url": "/grimacing-face/"
    },
    {
      "number": 62,
      "emoji": "😰",
      "codePoint": 128560,
      "url": "/face-with-open-mouth-and-cold-sweat/"
    },
    {
      "number": 63,
      "emoji": "😱",
      "codePoint": 128561,
      "url": "/face-screaming-in-fear/"
    },
    {
      "number": 64,
      "emoji": "😳",
      "codePoint": 128563,
      "url": "/flushed-face/"
    },
    {
      "number": 65,
      "emoji": "😵",
      "codePoint": 128565,
      "url": "/dizzy-face/"
    },
    {
      "number": 66,
      "emoji": "😡",
      "codePoint": 128545,
      "url": "/pouting-face/"
    },
    {
      "number": 67,
      "emoji": "😠",
      "codePoint": 128544,
      "url": "/angry-face/"
    },
    {
      "number": 68,
      "emoji": "👿",
      "codePoint": 128127,
      "url": "/imp/"
    },
    {
      "number": 69,
      "emoji": "😈",
      "codePoint": 128520,
      "url": "/smiling-face-with-horns/"
    },
    {
      "number": 70,
      "emoji": "👦",
      "codePoint": 128102,
      "url": "/boy/"
    },
    {
      "number": 71,
      "emoji": "👧",
      "codePoint": 128103,
      "url": "/girl/"
    },
    {
      "number": 72,
      "emoji": "👨",
      "codePoint": 128104,
      "url": "/man/"
    },
    {
      "number": 73,
      "emoji": "👩",
      "codePoint": 128105,
      "url": "/woman/"
    },
    {
      "number": 74,
      "emoji": "👴",
      "codePoint": 128116,
      "url": "/older-man/"
    },
    {
      "number": 75,
      "emoji": "👵",
      "codePoint": 128117,
      "url": "/older-woman/"
    },
    {
      "number": 76,
      "emoji": "👶",
      "codePoint": 128118,
      "url": "/baby/"
    },
    {
      "number": 77,
      "emoji": "👱",
      "codePoint": 128113,
      "url": "/person-with-blond-hair/"
    },
    {
      "number": 78,
      "emoji": "👮",
      "codePoint": 128110,
      "url": "/police-officer/"
    },
    {
      "number": 79,
      "emoji": "👲",
      "codePoint": 128114,
      "url": "/man-with-gua-pi-mao/"
    },
    {
      "number": 79,
      "emoji": "👲",
      "codePoint": 128114,
      "url": "/man-with-gua-pi-mao/"
    },
    {
      "number": 80,
      "emoji": "👳",
      "codePoint": 128115,
      "url": "/man-with-turban/"
    },
    {
      "number": 81,
      "weatherCondition": "clear",
      "emoji": "🌞",
      "codePoint": 127774,
      "hex": "U+1F31E"
    },
    {
      "number": 82,
      "weatherCondition": "clouds",
      "emoji": "🌥",
      "codePoint": 127781,
      "hex": "U+1F325"
    },
    {
      "number": 83,
      "weatherCondition": "snow",
      "emoji": "🌨",
      "codePoint": 127784,
      "hex": "U+1F328"
    },
    {
      "number": 84,
      "weatherCondition": "rain",
      "emoji": "🌧",
      "codePoint": 127783,
      "hex": "U+1F327"
    },
    {
      "number": 85,
      "weatherCondition": "drizzle",
      "emoji": "🌦",
      "codePoint": 127782,
      "hex": "U+1F326"
    },
    {
      "number": 86,
      "weatherCondition": "thunderstorm",
      "emoji": "🌩",
      "codePoint": 127785,
      "hex": "U+1F329"
    },
    {
      "number": 87,
      "weatherCondition": "extreme",
      "emoji": "🌪",
      "codePoint": 127786,
      "hex": "U+1F32A"
    }
  ],

  weatherConditions: [{
      "weatherCondition": "clear",
      "emoji": "🌞",
      "hex": "U+1F31E"
    },
    {
      "weatherCondition": "clouds",
      "emoji": "🌥",
      "hex": "U+1F325"
    },
    {
      "weatherCondition": "snow",
      "emoji": "🌨",
      "hex": "U+1F328"
    },
    {
      "weatherCondition": "rain",
      "emoji": "🌧",
      "hex": "U+1F327"
    },
    {
      "weatherCondition": "drizzle",
      "emoji": "🌦",
      "hex": "U+1F326"
    },
    {
      "weatherCondition": "thunderstorm",
      "emoji": "🌩",
      "hex": "U+1F329"
    },
    {
      "weatherCondition": "extreme",
      "emoji": "🌪",
      "hex": "U+1F32A"
    }
  ],
  middlecol: {},
  encryptedcol: {},
  decryptedcol: {},
  xhr: {},
  unencryptedMessage: {},
  encryptedMessage: {},
  alphanum: {},
  arrayToUse: {}
};
U.addEvent(window, "load", init);
function init() {
  g.middlecol = U.$("emojiContainer");
  U.$("weatherTextBox").style.display = "none";
  g.encryptedcol = U.$("encryptedMessage");
  U.addEvent(U.$("pickyourkeybuttons"), "click", keyPickToggle);
  checkFirstVisitCookie();
  pickEncryptionMode();
  g.alphanum = ["", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", " ", "A", "B", "C", "D", "E", "F", "G", "H",
    "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "l", "2", "3", "4", "5", "6", "7", "8", "9", ",", ".", "?", "!", ")", "(", "-", ""
  ];
  parseEmojiJSON();
}

function checkFirstVisitCookie() {
  var c = document.cookie;
  if (c.indexOf("visited") === -1) {
    document.cookie = "visited=yes;";
    location.href = "index.html";
  }

}

/**
 * pickPageToDisplay - wire up event handlers
 * to have user pick between weather or regular encryption
 *
 */
function pickEncryptionMode() {
  if (U.$("decryptMessageBox")) {
    U.$("pickyourkeybuttons").style.display = "none";
    g.encryptedMessage = U.$("decryptMessageBox");
    U.addEvent(g.middlecol, "click", getEncryptedMessage);
    U.addEvent(document, "keyup", getEncryptedMessage);
  } else {
    g.unencryptedMessage = U.$("encryptMessageBox");
    U.addEvent(g.middlecol, "click", getUnEncryptedMessage);
    U.addEvent(document, "keyup", getUnEncryptedMessage);
  }
}

/**
 * parseEmojiJSON - choose which array to use
 * depending on browser
 * create emoji or regular keys in for loop using createKeys function
 * @return {type}  description
 */
function parseEmojiJSON() {
  if (document.addEventListener) {
    g.arrayToUse = g.emojis;
  } else if (document.attachEvent) {
    g.arrayToUse = g.alphanum;
  }
  for (var i = 1; i < g.arrayToUse.length; i++) {
    createKeys(g.arrayToUse[i], g.middlecol);
  }
}
/**
 * createKeys - creates and appends
 * emojis or regular alphanum text
 * as paragraphs in middle column of view
 *
 * @param  {string} key       displacement from user to array
 * @param  {type} container either middle or right column
 */
function createKeys(key, container) {
  var append = function(text) {
    var p = document.createElement("p");
    p.className = "keyContainers";
    container.appendChild(p);
    return p;
  };
  if (g.arrayToUse[0].codePoint !== undefined) {
    append().innerHTML = key.emoji;
  } else {
    append().innerHTML = key;
  }
}
/**
 * getEncryptedMessage - retrieve encrypted
 * message from message box in encrypt.html
 *  called on key up
 * @param  {event} e key up event
 */
function getEncryptedMessage(e) {
  var e = U.getTarget(e);
  g.encryptedcol.innerHTML = "";
  if (g.arrayToUse[0].codePoint) {
    decryptMessage(g.encryptedMessage.value, e.innerHTML);
  } else {
    decryptMessage(g.encryptedMessage.value, e.innerHTML);
  }
}

/**
 * getUnEncryptedMessage - retrieve unencrypted
 * message from message box in encrypt.html
 *  called on key up
 * @param  {event} e key up event
 */
function getUnEncryptedMessage(e) {
  var e = U.getTarget(e);
  g.encryptedcol.innerHTML = "";
  if (g.arrayToUse[0].codePoint) {
    encryptMessage(g.unencryptedMessage.value, e.innerHTML);
  } else {
    encryptMessage(g.unencryptedMessage.value, e.innerHTML);
  }
}

/**
 * emojiStringToArray - used to parse emoji encrypted
 * message for easier loop logic
 * from emoji encryption
 *
 * @param  {type} str encrypted emoji message
 * @return {type}     emojis as array
 */
function emojiStringToArray(str) {
  var split = str.split(/([\uD800-\uDBFF][\uDC00-\uDFFF])/);
  var arr = [];
  for (var i = 0; i < split.length; i++) {
    var char = split[i];
    if (char !== "") {
      arr.push(char);
    }
  }
  return arr;
}

/**
 * decryptMessage - parses key if the key
 * is emoji and converts emoji string to an array
 *  checks if key is of type emoji and
 * uses an decryption algorithm to replace the
 * message back to english with a mix of modulus and
 * the length of the array if key > alphanum array
 * @param  {type} str encrypted message
 * @param  {type} key users key to decrypt
 */
function decryptMessage(str, key) {
  g.key = key;
  if (g.key === "") {
    g.key = 1;
  } else if (key.length > 1) {
    g.key = parseInt(twemoji.convert.toCodePoint(g.key), 16);
    str = emojiStringToArray(str);
  } else {
    console.log("split");
    str = str.split("");
  }
  //find where key is in the emoji or alphanum array
  var index = findKey();
  var output = "";
  var c = -1;
  // Go through each character
  for (var l = 0; l < str.length; l++) {
    if (g.key > 1000) {
      c = parseInt(twemoji.convert.toCodePoint(str[l]), 16);
    }
    else{
      c = str[l];
    }
    for (var i = 1; i < g.arrayToUse.length; i++) {
      if (c == g.arrayToUse[i].codePoint || c == g.arrayToUse[i]) {
        if (index > g.alphanum.length) {
          output += g.alphanum[i - index % g.alphanum.length];
        } else if (i - index < 0) {
          output += g.alphanum[g.alphanum.length - index % g.alphanum.length + i];
        } else {
          output += g.alphanum[(i - index) % g.alphanum.length];
        }
      }
    }
  }
  console.log(g.encryptedcol.innerHTML = output);
  g.encryptedcol.innerHTML = output;
}

/**
 * encryptMessage - encrypt users message in emoji or regular
 * creates emojis at the end once key has been applied
 * to each element index
 * @param  {type} str users message
 * @param  {type} key users key
 * @return {type}
 */
function encryptMessage(str, key) {
  g.key = key;
  str = validateMessageAndKey(str);
  //find where key is in the emoji or alphanum array
  var indexArray = [];
  //find each index of letter from message
  for (var i = 0; i < str.length; i++) {
    for (var j = 1; j < g.alphanum.length; j++) {
      if (str[i] == g.alphanum[j]) {
        indexArray.push(j);
        break;
      }
    }
  }
  var index = findKey();
  var output = "";
  // Go through each character
  for (var k = 0; k < indexArray.length; k++) {
    if ((indexArray[k] + index) > g.alphanum.length) {
      indexArray[k] = (indexArray[k] + index) % g.alphanum.length;
    } else {
      indexArray[k] = indexArray[k] + index;
    }
    createKeys(g.arrayToUse[indexArray[k]], g.encryptedcol);
  }
}
/**
 * validateMessageAndKey - validates Users message
 * if program should use emoji or regular encryption
 *
 * @param  {string} str user input
 * @return {string}     parsed user input
 */
function validateMessageAndKey(str) {
  if (g.key === "" || g.key === undefined) {
    g.key = 1;
  } else if (g.key.length > 1) {
    g.key = parseInt(twemoji.convert.toCodePoint(g.key), 16);
    if (str[0].length > 1)
      str = emojiStringToArray(str);
  }
  return str;
}


/**
 * findKey - find user
 * chosen key is used
 * for both encrypt and decrypt
 */
function findKey() {
  var index = 0;
  for (var j = 1; j < g.arrayToUse.length; j++) {
    if (g.key > 1000) {
      if (g.key == g.arrayToUse[j].codePoint) {
        index = j;
        break;
      }
    } else {
      if (g.key == g.arrayToUse[j]) {
        index = j;
        break;
      }
    }
  }
  return index;
}
/**
 * getJSONData - initialize
 * variables for API request
 * send city name
 */
function getJSONData() {
  var domain = "http://api.openweathermap.org/data/2.5/weather?";
  var id = "appid=2cbb62e21675e351c1955370fec42104";
  var city = "q=" + encodeURIComponent(getCityName());
  domain = domain + city + "&" + id;
  if (window.XMLHttpRequest) {
    g.xhr = new XMLHttpRequest();
  } else {
    g.xhr = new ActiveXObject("Microsoft.XMLHTTP");
  }
  g.xhr.open("GET", domain, true);
  g.xhr.onreadystatechange = onWeatherEmojiReady;
  g.xhr.send(null);
}


/**
 * onWeatherEmojiReady - callback
 * for getJSONData
 */
function onWeatherEmojiReady() {
  if (g.xhr.status == 200 && g.xhr.readyState == 4) {
    parseWeatherJSON(g.xhr.responseText);
  }
}
/**
 * parseWeatherJSON -
 * helper method for callback for JSON
 * weather API request in getJSONData
 */
function parseWeatherJSON() {
  var data = JSON.parse(g.xhr.responseText);
  var weatherdata = data.weather.map(function(a) {
    return a.main;
  });
  if (weatherdata.length > 0) {
    for (var i = 0; i < g.weatherConditions.length; i++) {
      if (g.weatherConditions[i].weatherCondition.toLowerCase() == weatherdata[0].toLowerCase()) {
        encryptMessage(g.unencryptedMessage.value, g.weatherConditions[i].emoji);
        var p = document.createElement("p");
        U.$("middle").appendChild(p).innerHTML = g.weatherConditions[i].emoji;
      }
    }
  } else {
    encryptMessage(g.unencryptedMessage.value, g.weatherConditions[0].emoji);
    var p = document.createElement("p");
    U.$("middle").appendChild(p).innerHTML = g.weatherConditions[0].emoji;
  }
}
/**
 * getCityName - grab user provided
 * city name from textbox in view
 *
 * @return {string}
 */
function getCityName() {
  var city = U.$("weatherTextBox").value;
  return city;
}
/**
 * callWeatherApi - incoke JSONData
 * when user presses enter after
 * typing a city name
 * which calls weather API
 *
 * @param  {type} e description
 */
function callWeatherApi(e) {
  if (e.which == 13) {
    if (g.encryptedcol.innerHTML !== undefined) {
      g.encryptedcol.innerHTML = "";
    }
    getJSONData();
    document.cookie = "city=" + getCityName() + ";";
  }
}
/**
 * keyPickToggle - Function to handle click event between
 * weather and regular emoji encryption
 * also saves cookie information from weather api
 *
 * @param  {event} e click event on radio buttons in index.html
 */
function keyPickToggle(e) {
  var e = U.getTarget(e);
  if (e.value == "Regular") {
    U.$("emojiContainer").style.display = "block";
    U.$("weatherTextBox").style.display = "none";
    U.addEvent(document, "keyup", getEncryptedMessage);
  } else if (e.value == "Weather") {
    var c = document.cookie;
    if (c.indexOf("city") !== -1) {
      var index = c.indexOf("city=") + "city=".length;
      var city = c.substring(index);
      U.$("weatherTextBox").placeholder = city;
    }
    U.removeEvent(document, "keyup", getUnEncryptedMessage);
    U.addEvent(document, "keyup", callWeatherApi);
    U.$("emojiContainer").style.display = "none";
    U.$("weatherTextBox").style.display = "block";
  }
}
