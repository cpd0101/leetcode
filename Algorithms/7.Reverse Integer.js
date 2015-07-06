/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var str = x + '';
    var arr = [];
    if (str[0] === '-') {
        arr.push(str[0])
        var last = 1;
    } else {
        var last = 0;
    }
    for (var i = str.length - 1; i >= last; i--) {
        arr.push(str[i]);
    }
    var n = parseInt(arr.join(''));
    var max = Math.pow(2, 31);
    if (max - 1 < n || n < 1 - max) {
        return 0;
    } else {
        return n ;
    }
};