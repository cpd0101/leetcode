/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
    var isValid = function (board, row, col) {
        for (var i = 0; i < 9; i++) {
            if (i != row && board[i][col] === board[row][col]) {
                return false;
            }
        }

        for (var i = 0; i < 9; i++) {
            if (i != col && board[row][i] === board[row][col]) {
                return false;
            }
        }

        var beginRow = 3 * parseInt(row / 3);
        var beginCol = 3 * parseInt(col / 3);

        for (var i = beginRow; i < beginRow + 3; i++) {
            for (var j = beginCol; j < beginCol + 3; j++) {
                if (i != row && j != col && board[i][j] === board[row][col]) {
                    return false;
                }
            }
        }

        return true;
    };
    var solve = function (board) {
        for (var i = 0; i < 9; i++) {
            for (var j = 0; j < 9; j++) {
                if (board[i][j] === '.') {
                    for (var k = 1; k < 10; k++) {
                        board[i][j] = ('' + k);
                        if (isValid(board, i, j) && solve(board)) {
                            return true;
                        }
                        board[i][j] = '.';
                    }
                    return false;
                }
            }
        }
        return true;
    };
    solve(board);
};