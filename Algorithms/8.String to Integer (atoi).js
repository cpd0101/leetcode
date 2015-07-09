/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
	var num = parseInt(str);
    if (isNaN(num)) {
        return 0;
    } else {
        var max = Math.pow(2, 31) - 1;
        var min = - Math.pow(2, 31);
        if (num > max) {
        	return max;
        }
        if (num < min) {
        	return min;
        }
        return num;
    }
};