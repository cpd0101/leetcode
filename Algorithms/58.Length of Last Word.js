/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
	var len = 0;
    for (var i = s.length - 1; i > -1; i--) {
    	if (s[i] == ' ') {
    		if (len) {
    			return len;
    		}
    	} else {
    		len++;
    	}
    }
    return len;
};