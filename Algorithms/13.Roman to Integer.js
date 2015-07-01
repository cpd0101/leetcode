/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var str = s.replace(/IX$/, '9,')
    .replace(/VIII$/, '8,')
    .replace(/VII$/, '7,')
    .replace(/VI$/, '6,')
    .replace(/IV$/, '4,')
    .replace(/V$/, '5,')
    .replace(/III$/, '3,')
    .replace(/II$/, '2,')
    .replace(/I$/, '1,')
    .replace(/XC/, '90,')
    .replace(/LXXX/, '80,')
    .replace(/LXX/, '70,')
    .replace(/LX/, '60,')
    .replace(/XL/, '40,')
    .replace(/L/, '50,')
    .replace(/XXX/, '30,')
    .replace(/XX/, '20,')
    .replace(/X/, '10,')
    .replace(/CM/, '900,')
    .replace(/DCCC/, '800,')
    .replace(/DCC/, '700,')
    .replace(/DC/, '600,')
    .replace(/CD/, '400,')
    .replace(/D/, '500,')
    .replace(/CCC/, '300,')
    .replace(/CC/, '200,')
    .replace(/C/, '100,')
    .replace(/^MMM/, '3000,')
    .replace(/^MM/, '2000,')
    .replace(/^M/, '1000,');
    var arr = str.split(',');
    var n = 0;
    for (var i = arr.length - 2; i > -1; i--) {
        n += parseInt(arr[i]);
    }
    return n;
};



/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var obj = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };
    var len = s.length - 1;
    var n = 0;
    for (var i = 0; i < len; i++) {
        if (obj[s[i]] < obj[s[i + 1]]) {
            n -= obj[s[i]];
        } else {
            n += obj[s[i]];
        }
    }
    n += obj[s[len]];
    return n;
};