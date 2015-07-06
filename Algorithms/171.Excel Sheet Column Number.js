/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    var start = 'A'.charCodeAt(0) - 1;
    var sum = 0;
    var len = s.length;
    for (var i = 0; i < len; i++) {
    	sum += Math.pow(26, len - i - 1) * (s.charCodeAt(i) - start);
    }
    return sum;
};