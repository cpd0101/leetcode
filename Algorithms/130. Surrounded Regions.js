/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
    var visit = [];
    for (var i = 0; i < board.length; i++) {
        visit[i] = [];
    }
    var handle = function (i, j, board, visit) {
        var arr = [[i, j]];
        visit[i][j] = 1;
        var surround = true;
        for (var k = 0; k < arr.length; k++) {
            var posi = arr[k][0];
            var posj = arr[k][1];
            if (posi - 1 >= 0) {
                if (board[posi - 1][posj] === 'O' && !visit[posi - 1][posj]) {
                    arr.push([posi - 1, posj]);
                }
                visit[posi - 1][posj] = 1;
            } else {
                surround = false;
            }
            if (posi + 1 < board.length) {
                if (board[posi + 1][posj] === 'O' && !visit[posi + 1][posj]) {
                    arr.push([posi + 1, posj]);
                }
                visit[posi + 1][posj] = 1;
            } else {
                surround = false;
            }
            if (posj - 1 >= 0) {
                if (board[posi][posj - 1] === 'O' && !visit[posi][posj - 1]) {
                    arr.push([posi, posj - 1]);
                }
                visit[posi][posj - 1] = 1;
            } else {
                surround = false;
            }
            if (posj + 1 < board[posi].length) {
                if (board[posi][posj + 1] === 'O' && !visit[posi][posj + 1]) {
                    arr.push([posi, posj + 1]);
                }
                visit[posi][posj + 1] = 1;
            } else {
                surround = false;
            }
        }
        if (surround) {
            for (var k = 0; k < arr.length; k++) {
                board[arr[k][0]][arr[k][1]] = 'X';
            }
        }
    };
    for (var i = 0; i < board.length; i++) {
        for (var j = 0; j < board[i].length; j++) {
            if (board[i][j] === 'O' && !visit[i][j]) {
                handle(i, j, board, visit);
            }
            visit[i][j] = 1;
        }
    }
};