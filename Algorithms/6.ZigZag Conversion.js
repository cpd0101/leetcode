/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    var arr = [];
    var span = numRows + numRows - 2;
    if (span < 1) return s;
    for (var i = 0; i < numRows; i++) {
    	if (i === 0 || i === numRows - 1) {
    		for (var j = i; j < s.length; j += span) {
    			arr.push(s[j]);
    		}
    	} else {
    		var gap = span - i - i;
    		for (var j = i; j < s.length; j += span) {
	    		arr.push(s[j]);
	    		arr.push(s[j + gap]);
	    	}
    	}
    }
    return arr.join('');
};