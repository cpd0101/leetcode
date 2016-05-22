/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
    var stack = [];
    var ret = 0;
    for (var i = 0; i < heights.length; i++) {
        if (!stack.length || stack[stack.length - 1] <= heights[i]) {
            stack.push(heights[i]);
        } else {
            var count = 0;
            while (stack.length && stack[stack.length - 1] > heights[i]) {
                count++;
                ret = Math.max(ret, stack[stack.length - 1] * count);
                stack.pop();
            }
            while (count--) {
                stack.push(heights[i]);
            }
            stack.push(heights[i]);
        }
    }
    var count = 0;
    while(stack.length) {
        count++;
        ret = Math.max(ret, stack[stack.length - 1] * count);
        stack.pop();
    }
    return ret;
};