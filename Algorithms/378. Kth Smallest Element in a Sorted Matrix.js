/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (matrix, k) {
    var arr = [];
    for (var i = 0; i < matrix.length; i++) {
        arr = arr.concat(matrix[i]);
    }
    arr.sort(function (a, b) {
        return a - b;
    });
    return arr[k - 1];
};