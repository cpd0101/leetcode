/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    var isMatch = function (i, j, k, path) {
        if (i < 0 || i >= board.length) {
            return false;
        }
        if (j < 0 || j >= board[i].length) {
            return false;
        }
        if (word[k] === board[i][j]) {
            if (path.indexOf(' ' + i + ',' + j + ' ') > -1) {
                return false;
            }
            path = path + i + ',' + j + ' ';
            if (k === word.length - 1) {
                return true;
            } else {
                return isMatch(i - 1, j, k + 1, path) || isMatch(i + 1, j, k + 1, path) || isMatch(i, j - 1, k + 1, path) || isMatch(i, j + 1, k + 1, path);
            }
        } else {
            return false;
        }
    };
    for (var i = 0; i < board.length; i++) {
        for (var j = 0; j < board[i].length; j++) {
            if (isMatch(i, j, 0, ' ')) return true;
        }
    }
    return false;
};