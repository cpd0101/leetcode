/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    var max = 0;
    var i = 0;
    var j = height.length - 1;
    while (i < j) {
    	var min = height[i] < height[j] ? height[i] : height[j];
    	var area = min * (j - i);
    	if (area > max) max = area;
    	if (height[i] < height[j]) {
    		i++;
    	} else {
    		j--;
    	}
    }
    return max;
};