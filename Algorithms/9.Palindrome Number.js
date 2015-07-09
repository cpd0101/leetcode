/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) return false;
    if (x < 10) return true;
    var base = 1;
    while (x / base >= 10) {
    	base *= 10;
    }
    while (x) {
    	var left = Math.floor(x / base);
    	var right = x % 10;
    	if (left != right) return false;
    	x -= left * base;
    	x = Math.floor(x / 10);
    	base = base / 100; 
    }
    return true;
};