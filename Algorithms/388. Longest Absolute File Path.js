/**
 * @param {string} input
 * @return {number}
 */
var lengthLongestPath = function (input) {
    var arr = input.split('\n');
    if (!arr.length) {
        return 0;
    }
    var stack = [];
    var max = 0;
    for (var i = 0; i < arr.length; i++) {
        var str = arr[i];
        var originLen = str.length;
        str = str.replace(/^(\t)*/, '');
        var level = originLen - str.length;
        while (level < stack.length) {
            stack.pop();
        }
        if (arr[i].indexOf('.') > -1) {
            var len = stack.join('/').length;
            if (len) {
                len += 1;
            }
            len += str.length;
            if (len > max) {
                max = len;
            }
        } else {
            stack.push(str);
        }
    }
    return max;
};