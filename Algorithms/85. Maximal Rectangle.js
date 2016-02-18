/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
    var isRectangle = function (i, j, k, l) {
        for (var m = i; m <= k; m++) {
            for (var n = j; n <= l; n++) {
                if (matrix[m][n] == '0') {
                    return false;
                }
            }
        }
        return true;
    };
    var solve = function (i, j) {
        for (var width = 0; width <= j; width++) {
            if (matrix[i][j - width] == '0') {
                break;
            }
        }
        for (var height = 0; height <= i; height++) {
            if (matrix[i - height][j] == '0') {
                break;
            }
        }
        var area = Math.max(width, height);
        for (var k = width; k > 0; k--) {
            for (var l = 1; l <= height; l++) {
                if (k * l <= area) {
                    continue;
                }
                if (isRectangle(i - l + 1, j - k + 1, i, j)) {
                    area = k * l;
                } else {
                    break;
                }
            }
        }
        return area;
    };
    var max = 0;
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {
            var area = solve(i, j);
            if (area > max) {
                max = area;
            }
        }
    }
    return max;
};