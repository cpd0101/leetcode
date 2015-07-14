/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    var last = s.length - 1;
    for (var i = 0; i < s.length; i++) {
    	if ((s[i] >= 'a' && s[i] <= 'z') || (s[i] >= 'A' && s[i] <= 'Z') || (s[i] >= '0' && s[i] <= '9')) {
    		for (var j = last; j >= 0; j--) {
    			if ((s[j] >= 'a' && s[j] <= 'z') || (s[j] >= 'A' && s[j] <= 'Z') || (s[j] >= '0' && s[j] <= '9')) {
    				if (s[i] === s[j] || s[i].toLowerCase() === s[j].toLowerCase()) {
    					break;
    				} else {
    					return false;
    				}
    			}
    		}
    		last = --j;
    	}
    	if (i >= last) return true;
    }
    return true;
};