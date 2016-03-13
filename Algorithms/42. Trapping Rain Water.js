/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    var start = 0;
    var ret = 0;
    var temp = 0;
    var index = 0;
    for (var i = 0; i < height.length; i++) {
        if (start) {
            if (start > height[i]) {
                temp += start - height[i];
            } else {
                ret += temp;
                start = height[i];
                temp = 0;
                index = i;
            }
        } else {
            start = height[i];
            index = i;
        }
    }
    start = 0;
    for (var i = height.length - 1; i >= index; i--) {
        if (start) {
            if (start > height[i]) {
                ret += start - height[i];
            } else {
                start = height[i];
            }
        } else {
            start = height[i];
        }
    }
    return ret;
};