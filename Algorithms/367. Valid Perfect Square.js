/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
    var n = Math.sqrt(num);
    return parseInt(n) === n;
};