// JavaScript doesn't count symbols correctly if the code point is outside of
// the "basic multilingual plane", that is, greater than U+FFFF
// What is that in decimal?
var maxBMP = parseInt("ffff", 16);
// 65535
var beyondBMP = parseInt("10000", 16);
// 65536
// Example string to parse
var x = "🌂'🎊 🍮";
// Same string written with unicode escape sequences.
// The emoji are outside of BMP so they each use 4 bytes (two escapes)
var a = "\ud83c\udf02'\ud83c\udf8a \ud83c\udf6e";
// x.length
// 8
// x === a
// true
function badList(str) {
    var y = [];
    for (var i = 0; i < str.length; i++) {
        // This condition won't work, because charCodeAt
        // doesn't know about non-BMP characters like "\ud83c\udf02".
        // Need to use codePointAt instead.
        if ( str.charCodeAt(i) > 65535 ) {
            y.push(str[i] + str[i + 1]); i += 1;
        } else {
            y.push(str[i]);
        }
    }
    return y;
}

badList(x);
//Array [ "\ud83c", "\udf02", "'", "\ud83c", "\udf8a", " ", "\ud83c", "\udf6e" ]

function goodList(str) {
    var y = [];
    for (var i = 0; i < str.length; i++) {
        if ( str.codePointAt(i) > 65535 ) {
            y.push(str[i] + str[i + 1]); i += 1;
        } else {
            y.push(str[i]);
        }
    }
    return y;
}

goodList(x);
//Array [ "🌂", "'", "🎊", " ", "🍮" ]
