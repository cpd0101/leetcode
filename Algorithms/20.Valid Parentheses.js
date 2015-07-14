/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var arr = []; 
    for (var i = 0; i < s.length; i++) {
    	switch (s[i]) {
    		case '(':
    			arr.push(s[i]);
    			break;
    		case '[':
    			arr.push(s[i]);
    			break;
    		case '{':
    			arr.push(s[i]);
    			break;
    		case ')':
    			if (arr.pop() !== '(') return false;
    			break;
    		case ']':
    			if (arr.pop() !== '[') return false;
    			break;
    		case '}':
    			if (arr.pop() !== '{') return false;
    			break;
    	}
    }
    if (arr.length < 1) {
    	return true;
    } else {
    	return false;
    }
};