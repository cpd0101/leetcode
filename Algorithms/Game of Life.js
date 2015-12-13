/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var getCellStatus = function (board, x, y) {
    if (x < 0 || y < 0 || x >= board.length || y >= board[0].length) {
        return 0;
    }
    return board[x][y] & 1;
};

var gameOfLife = function(board) {
    var m = board.length;
    var n = board[0].length;
    var dx = [1, 1, 1, 0, 0, -1, -1, -1];
    var dy = [1, 0, -1, 1, -1, 1, 0, -1];
    for (var i = 0; i < m; i++) {
        for (var j = 0; j < n; j++) {
            var lives = 0;
            for (var k = 0; k < 8; k++) {
                if (getCellStatus(board, i + dx[k], j + dy[k])) {
                    lives++;
                }
            }
            if (lives === 3 || lives + board[i][j] === 3) {
                board[i][j] |= 2;
            }
        }
    }
    for (var i = 0; i < m; i++) {
        for (var j = 0; j < n; j++) {
            board[i][j] >>= 1;
        }
    }
};