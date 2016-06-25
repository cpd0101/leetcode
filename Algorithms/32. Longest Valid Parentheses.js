/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
    var stack = [];
    var arr = [];
    for (var i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            stack.push(i);
        } else if (s[i] === ')' && stack.length) {
            arr[i] = 1;
            arr[stack.pop()] = 1;
        }
    }
    var max = 0;
    var temp = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i]) {
            temp++;
        } else {
            temp = 0;
        }
        if (temp > max) {
            max = temp;
        }
    }
    return max;
};