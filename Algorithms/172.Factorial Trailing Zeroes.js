/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    var x = Math.floor(Math.log(n) / Math.log(5));
    var temp = Math.floor(n / 5);
    for (var i = 2; i <= x; i++) {
    	temp += Math.floor(n / Math.pow(5, i));
    }
    return temp;
};