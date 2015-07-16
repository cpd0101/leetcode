/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    var result = [];
    if (numRows) result.push([1]);
    for (var i = 1; i < numRows; i++) {
        var temp = [1];
        for (var j = 1; j < i; j++) {
            temp.push(result[i - 1][j - 1] + result[i - 1][j]);
        }
        temp.push(1);
        result.push(temp);
    }
    return result;
};