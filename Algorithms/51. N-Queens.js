/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
    var board = [];
    var line = [];
    for (var i = 0; i < n; i++) {
        board[i] = [];
        line[i] = '.';
    }
    var canPut = function (i, j) {
        for (var k = 0; k < n; k++) {
            if (board[k][j] === 'Q' || board[i][k] === 'Q') {
                return false;
            }
        }
        var min = i < j ? i : j;
        var max = n - 1 - i < n - 1 - j ? n - 1 - i : n - 1 - j;
        min *= -1;
        for (var k = min; k <= max; k++) {
            if (board[i + k][j + k] === 'Q') {
                return false;
            }
        }
        var min = j < n - 1 - i ? j : n - 1 - i;
        var max = i < n - 1 - j ? i : n - 1 - j;
        min *= -1;
        for (var k = min; k <= max; k++) {
            if (board[i - k][j + k] === 'Q') {
                return false;
            }
        }
        return true;
    };
    var solve = function (level) {
        if (level === 0) {
            var ret = [];
            for (var i = 0; i < n; i++) {
                if (canPut(level, i)) {
                    line[i] = 'Q';
                    ret.push([line.join('')]);
                    line[i] = '.';
                }
            }
            return ret;
        } else {
            var ret = [];
            for (var i = 0; i < n; i++) {
                if (canPut(level, i)) {
                    line[i] = 'Q';
                    var tempLine = line.join('');
                    line[i] = '.';
                    board[level][i] = 'Q';
                    var tempArr = solve(level - 1);
                    for (var j = 0; j < tempArr.length; j++) {
                        tempArr[j].push(tempLine);
                        ret.push(tempArr[j]);
                    }
                    board[level][i] = undefined;
                }
            }
            return ret;
        }
    };
    return solve(n - 1);
};