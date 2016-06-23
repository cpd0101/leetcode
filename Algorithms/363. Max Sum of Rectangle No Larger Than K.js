/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var maxSumSubmatrix = function(matrix, k) {
    var row = matrix.length;
    if (row === 0) {
        return 0;
    }
    var col = matrix[0].length;
    var sums = [];
    for (var i = 0; i < row; i++) {
        sums[i] = [];
    }
    sums[0][0] = matrix[0][0];
    for (var i = 1; i < row; i++) {
        sums[i][0] = sums[i - 1][0] + matrix[i][0];
    }
    for (var i = 1; i < col; i++) {
        sums[0][i] = sums[0][i - 1] + matrix[0][i];
    }
    for (var i = 1; i < row; i++) {
        for (var j = 1; j < col; j++) {
            sums[i][j] = sums[i - 1][j] + sums[i][j - 1] - sums[i - 1][j - 1] + matrix[i][j];
        }
    }
    var ret = -Infinity;
    for (var si = 0; si < row; si++) {
        for (var ei = si; ei < row; ei++) {
            for (var sj = 0; sj < col; sj++) {
                for (var ej = sj; ej < col; ej++) {
                    var val = 0;
                    if (si === 0 && sj === 0) {
                        val = sums[ei][ej];
                    } else if (si === 0) {
                        val = sums[ei][ej] - sums[ei][sj - 1];
                    } else if (sj === 0) {
                        val = sums[ei][ej] - sums[si - 1][ej];
                    } else {
                        val = sums[ei][ej] - sums[ei][sj - 1] - sums[si - 1][ej] + sums[si - 1][sj - 1];
                    }
                    if (val <= k && val > ret) {
                        ret = val;
                    }
                }
            }
        }
    }
    return ret;
};