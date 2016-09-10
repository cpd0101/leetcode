/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
    var stack = [];
    var digit = '';
    for (var i = 0; i < s.length; i++) {
        if (s[i] === ']') {
            var lastIndex = stack.lastIndexOf('[');
            var n = parseInt(stack[lastIndex - 1]);
            var str = Array(n + 1).join(stack.slice(lastIndex + 1).join(''));
            stack = stack.slice(0, lastIndex - 1).concat(str.split(''));
        } else if (/\d/.test(s[i])) {
            digit += s[i];
        } else if (s[i] === '[') {
            stack.push(parseInt(digit, 10));
            digit = '';
            stack.push(s[i]);
        } else {
            stack.push(s[i]);
        }
    }
    return stack.join('');
};