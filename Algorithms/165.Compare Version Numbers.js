/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
	var arr1 = version1.split('.');
    var arr2 = version2.split('.');
    var minLen = arr1.length < arr2.length ? arr1.length : arr2.length;
    for (var i = 0; i < minLen; i++) {
    	var num1 = parseInt(arr1[i]);
    	var num2 = parseInt(arr2[i]);
    	if (num1 > num2) {
    		return 1;
    	} else if (num1 < num2) {
    		return -1;
    	}
    }
    if (arr1.length === arr2.length) {
    	return 0;
    } else {
    	if (minLen === arr1.length) {
    		for (i = minLen; i < arr2.length; i++) {
    			if (parseInt(arr2[i]) !== 0) return -1;
    		}
    	} else {
    		for (i = minLen; i < arr1.length; i++) {
    			if (parseInt(arr1[i]) !== 0) return 1;
    		}
    	}
    	return 0;
    }
};