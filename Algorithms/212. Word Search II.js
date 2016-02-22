/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (board, words) {
    var Trie = function () {};
    Trie.prototype.insert = function (word) {
        var node = this;
        for (var i = 0; i < word.length; i++) {
            if (!node[word[i]]) {
                node[word[i]] = new Trie();
            }
            node = node[word[i]];
        }
        node.item = word;
    };
    Trie.prototype.search = function (word) {
        var node = this;
        for (var i = 0; i < word.length; i++) {
            if (!node[word[i]]) return null;
            node = node[word[i]];
        }
        return node;
    };
    var ret = [];
    var trie = new Trie();
    var visited = [];
    for (var i = 0; i < board.length; i++) {
        visited[i] = [];
    }
    var dfs = function (board, i, j, str, visited, trie) {
        if (i < 0 || i >= board.length) {
            return;
        }
        if (j < 0 || j >= board[i].length) {
            return;
        }
        if (visited[i][j]) {
            return;
        }
        str += board[i][j];
        var node = trie.search(str);
        if (!node) {
            return;
        }
        if (node.item && ret.indexOf(str) === -1) {
            ret.push(str);
        }
        visited[i][j] = true;
        dfs(board, i - 1, j, str, visited, trie);
        dfs(board, i + 1, j, str, visited, trie);
        dfs(board, i, j - 1, str, visited, trie);
        dfs(board, i, j + 1, str, visited, trie);
        visited[i][j] = false;
    };
    for (var i = 0; i < words.length; i++) {
        trie.insert(words[i]);
    }
    for (var i = 0; i < board.length; i++) {
        for (var j = 0; j < board[i].length; j++) {
            dfs(board, i, j, '', visited, trie);
        }
    }
    return ret;
};