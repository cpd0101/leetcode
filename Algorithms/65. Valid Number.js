/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function (s) {
    var INVALID = 0;
    var SAPCE = 1;
    var SIGN = 2;
    var DIGIT = 3;
    var DOT = 4;
    var EXPONENT = 5;

    var fsm = [
        [-1,  0,  3,  1,  2, -1],
        [-1,  8, -1,  1,  4,  5],
        [-1, -1, -1,  4, -1, -1],
        [-1, -1, -1,  1,  2, -1],
        [-1,  8, -1,  4, -1,  5],
        [-1, -1,  6,  7, -1, -1],
        [-1, -1, -1,  7, -1, -1],
        [-1,  8, -1,  7, -1, -1],
        [-1,  8, -1, -1, -1, -1]
    ];

    var state = 0;

    for (var i = 0; i < s.length; i++) {
        var inputType = INVALID;
        if (s[i] === ' ') {
            inputType = SAPCE;
        } else if (s[i] === '+' || s[i] === '-') {
            inputType = SIGN;
        } else if (s[i] === '.') {
            inputType = DOT;
        } else if (s[i] === 'e' || s[i] === 'E') {
            inputType = EXPONENT;
        } else if (s[i] >= '0' && s[i] <= '9') {
            inputType = DIGIT;
        }

        state = fsm[state][inputType];

        if (state === -1) {
            return false;
        }
    }

    return state === 1 || state === 4 || state === 7 || state === 8;
};