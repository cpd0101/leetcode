/**
 * @param {string} input
 * @return {number[]}
 */
var diffWaysToCompute = function(input) {
    var ret = [];
    for (var i = 0; i < input.length; i++) {
        if (input[i] === '-' || input[i] === '+' || input[i] === '*') {
            var left = diffWaysToCompute(input.slice(0, i));
            var right = diffWaysToCompute(input.slice(i + 1));
            for (var l = 0; l < left.length; l++) {
                for (var r = 0; r < right.length; r++) {
                    if (input[i] === '-') {
                        ret.push(left[l] - right[r]);
                    } else if (input[i] === '+') {
                        ret.push(left[l] + right[r]);
                    } else {
                        ret.push(left[l] * right[r]);
                    }
                }
            }
        }
    }
    if (ret.length === 0) {
        ret.push(parseInt(input));
    }
    return ret;
};