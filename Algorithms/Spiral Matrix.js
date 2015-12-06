/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    if (matrix.length === 0) {
        return [];
    }
    var direction = ['right', 'down', 'left', 'up'];
    var ret = [];
    var d = 0;
    var i = 0;
    var j = 0;
    while (true) {
        switch (direction[d++ % 4]) {
            case 'right':
                var flag = true;
                while (true) {
                    if (matrix[i][j] !== undefined) {
                        ret.push(matrix[i][j]);
                        matrix[i][j] = undefined;
                        flag = false;
                    } else {
                        if (flag) {
                            return ret;
                        }
                        break;
                    }
                    j++;
                }
                j = j - 1;
                i = i + 1;
                break;
            case 'down':
                var flag = true;
                while (i < matrix.length) {
                    if (matrix[i][j] !== undefined) {
                        ret.push(matrix[i][j]);
                        matrix[i][j] = undefined;
                        flag = false;
                    } else {
                        if (flag) {
                            return ret;
                        }
                        break;
                    }
                    i++;
                }
                i = i - 1;
                j = j - 1;
                break;
            case 'left':
                while (true) {
                    if (matrix[i][j] !== undefined) {
                        ret.push(matrix[i][j]);
                        matrix[i][j] = undefined;
                    } else {
                        break;
                    }
                    j--;
                }
                j = j + 1;
                i = i - 1;
                break;
            case 'up':
                while (i > -1) {
                    if (matrix[i][j] !== undefined) {
                        ret.push(matrix[i][j]);
                        matrix[i][j] = undefined;
                    } else {
                        break;
                    }
                    i--;
                }
                i = i + 1;
                j = j + 1;
                break;
        }
    }
};