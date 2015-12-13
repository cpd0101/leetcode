/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    var arr = [];
    var len = matrix.length;
    for (var i = 0; i < len; i++) {
        arr[i] = [];
    }
    for (var i = 0; i < len; i++) {
        var temp = matrix[i];
        for (var j = 0; j < temp.length; j++) {
            arr[j][len - 1 - i] = matrix[i][j];
        }
    }
    for (var i = 0; i < len; i++) {
        var temp = matrix[i];
        for (var j = 0; j < temp.length; j++) {
            matrix[i][j] = arr[i][j];
        }
    }
};