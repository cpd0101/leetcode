/**
 * @constructor
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
    this.arr = [];
    var yLen = matrix.length;
    if (yLen < 1) {
        return;
    }
    var xLen = matrix[0].length;
    if (yLen < xLen) {
        for (var i = 0; i < yLen; i++) {
            var temp = [];
            var sum = 0;
            for (var j = 0; j < xLen; j++) {
                temp.push(sum);
                sum += matrix[i][j];
            }
            temp.push(sum);
            this.arr.push(temp);
        }
        this.x = true;
    } else {
        for (var i = 0; i < xLen; i++) {
            var temp = [];
            var sum = 0;
            for (var j = 0; j < yLen; j++) {
                temp.push(sum);
                sum += matrix[j][i];
            }
            temp.push(sum);
            this.arr.push(temp);
        }
        this.y = true;
    }
};

/**
 * @param {number} row1
 * @param {number} col1
 * @param {number} row2
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
    var sum = 0;
    if (this.x) {
        for (var i = row1; i <= row2; i++) {
            sum += this.arr[i][col2 + 1] - this.arr[i][col1];
        }
    } else {
        for (var i = col1; i <= col2; i++) {
            sum += this.arr[i][row2 + 1] - this.arr[i][row1];
        }
    }
    return sum;
};


/**
 * Your NumMatrix object will be instantiated and called as such:
 * var numMatrix = new NumMatrix(matrix);
 * numMatrix.sumRegion(0, 1, 2, 3);
 * numMatrix.sumRegion(1, 2, 3, 4);
 */