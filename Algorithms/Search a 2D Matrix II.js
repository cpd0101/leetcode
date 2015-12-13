/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    var len = matrix.length - 1;
    var min = 0;
    var max = len;
    while (min < max) {
        var mid = parseInt((min + max) / 2);
        if (matrix[mid][0] > target) {
            max = mid;
        } else {
            if (min === mid) {
                break;
            } else {
                min = mid;
            }
        }
    }
    if (matrix[max][0] > target) {
        var i = min;
    } else {
        var i = max;
    }
    var min = 0;
    var max = len;
    var len = matrix[0].length - 1;
    while (min < max) {
        var mid = Math.ceil((min + max) / 2);
        if (matrix[mid][len] < target) {
            min = mid;
        } else {
            if (max === mid) {
                break;
            } else {
                max = mid;
            }
        }
    }
    if (matrix[min][len] < target) {
        var j = max;
    } else {
        var j = min;
    }
    for (var k = j; k <= i; k++) {
        var min = 0;
        var max = len;
        while (min < max) {
            var mid = parseInt((min + max) / 2);
            if (matrix[k][mid] > target) {
                max = mid;
            } else {
                if (min === mid) {
                    break;
                } else {
                    min = mid;
                }
            }
        }
        if (matrix[k][min] === target) {
            return true;
        }
        if (matrix[k][max] === target) {
            return true;
        }
    }
    return false;
};