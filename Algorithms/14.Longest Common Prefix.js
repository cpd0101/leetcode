/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
	var arr = [];
	if (strs.length < 2) {
		return strs.join('');
	}
	while (true) {
		var len = arr.length;
		var temp = strs[0][len];
		for (var i = 1; i < strs.length; i++) {
			if (strs[i][len] !== temp) {
				temp = undefined;
				break;
			}
    	}
    	if (temp === undefined) {
    		break;
    	} else {
    		arr.push(temp);
    	}
	}
	return arr.join('');
};