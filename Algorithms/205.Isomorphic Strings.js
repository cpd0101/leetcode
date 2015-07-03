/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    var map1 = [];
    var map2 = [];
    var len = s.length;
    for (var i = 0; i < len; i++) {
    	var temp1 = map1[s[i]];
    	var temp2 = map2[t[i]];
    	if (temp1 === undefined && temp2 === undefined) {
    		map1[s[i]] = t[i];
    		map2[t[i]] = s[i];
    	} else {
    		if (temp1 != t[i] || temp2 != s[i]) {
    			return false;
    		}
    	}
    }
    return true;
};