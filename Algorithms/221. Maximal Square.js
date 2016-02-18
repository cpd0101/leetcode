/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
    var max = 0;
    var solve = function (i, j) {
        var len = 0;
        while (len <= i && len <= j) {
            for (var k = 0; k <= len; k++) {
                for (var l = 0; l <= len; l++) {
                    if (matrix[i - k][j - l] == '0') {
                        return len;
                    }
                }
            }
            len++;
        }
        return len;
    };
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {
            var len = solve(i, j);
            if (len > max) {
                max = len;
            }
        }
    }
    return max * max;
};