/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    var m = matrix.length;
    var n = matrix[0].length;
    var rows = [];
    var cols = [];
    for (var i = 0; i < m; i++) {
        for (var j = 0; j < n; j++) {
            if (matrix[i][j] === 0) {
                rows[i] = 1;
                cols[j] = 1;
            } 
        }
    }
    for (var i = 0; i < m; i++) {
        for (var j = 0; j < n; j++) {
            if (rows[i] || cols[j]) {
                matrix[i][j] = 0;
            } 
        }
    }
};