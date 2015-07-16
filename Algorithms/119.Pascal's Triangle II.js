/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    var lastRow = [];
    if (++rowIndex) lastRow = [1];
    for (var i = 1; i < rowIndex; i ++) {
        var row = [1];
        for (var j = 1; j < i; j++) {
            row.push(lastRow[j - 1] + lastRow[j]);
        }
        row.push(1);
        lastRow = row;
    }
    return lastRow;
};