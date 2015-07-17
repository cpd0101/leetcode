/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    for (var i = 0; i < 9; i++) {
        var row = {};
        var col = {};
        for (var j = 0; j < 9; j++) {
            if (col[board[i][j]] && board[i][j] != '.') {
                return false;
            } else {
                col[board[i][j]] = 1;
            }
            if (row[board[j][i]] && board[j][i] != '.') {
                return false;
            } else {
                row[board[j][i]] = 1;
            }
        }
    }
    for (var x = 0; x < 9; x += 3) {
        for (var y = 0; y < 9; y += 3) {
            var temp = {};
            for (var i = x; i < x + 3; i++) {
                for (var j = y; j < y + 3; j++) {
                    if (temp[board[i][j]] && board[i][j] != '.') {
                        return false;
                    } else {
                        temp[board[i][j]] = 1;
                    }
                }
            }
        }
    }
    return true;
};