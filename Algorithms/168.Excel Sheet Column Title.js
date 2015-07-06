/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
    var arr = [];
    while (n) {
    	var a = n % 26;
    	if (a) {
    		arr.unshift(String.fromCharCode(64 + a));
    	} else {
    		arr.unshift('Z');
    		n -= 26;
    	}
    	n = Math.floor(n / 26);
    }
    return arr.join('');
};