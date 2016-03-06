/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
    var board = [];
    for (var i = 0; i < n; i++) {
        board[i] = [];
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
            var len = 0;
            for (var i = 0; i < n; i++) {
                if (canPut(level, i)) {
                    len++;
                }
            }
            return len;
        } else {
            var len = 0;
            for (var i = 0; i < n; i++) {
                if (canPut(level, i)) {
                    board[level][i] = 'Q';
                    len += solve(level - 1);
                    board[level][i] = undefined;
                }
            }
            return len;
        }
    };
    return solve(n - 1);
};