/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {Set} wordList
 *   Note: wordList is a Set object, see:
 *   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
 * @return {string[][]}
 */
var findLadders = function (beginWord, endWord, wordList) {
    var map = new Map();
    var res = [];
    var bfs = function (beginWord, endWord, wordList) {
        var queue = [];
        queue.push(beginWord);
        map.set(beginWord, 0);
        while (queue.length) {
            var curWord = queue.shift();
            if (curWord === endWord) {
                continue;
            }
            for (var i = 0; i < curWord.length; i++) {
                var start = 'a'.charCodeAt();
                var end = 'z'.charCodeAt();
                for (var j = start; j <= end; j++) {
                    var c = String.fromCharCode(j);
                    if (curWord[i] === c) {
                        continue;
                    }
                    var temp = curWord.slice(0, i) + String.fromCharCode(j) + curWord.slice(i + 1);
                    if (temp === endWord || wordList.has(temp)) {
                        if (!map.has(temp)) {
                            map.set(temp, map.get(curWord) + 1);
                            queue.push(temp);
                        }
                    }
                }
            }
        }
    };
    var dfs = function (beginWord, endWord, wordList, path) {
        if (beginWord === endWord) {
            path.push(beginWord);
            path.reverse();
            res.push(path);
            return;
        }
        if (!map.has(beginWord)) {
            return;
        }
        path.push(beginWord);
        var nextDepth = map.get(beginWord) - 1;
        for (var i = 0; i < beginWord.length; i++) {
            var start = 'a'.charCodeAt();
            var end = 'z'.charCodeAt();
            for (var j = start; j <= end; j++) {
                var c = String.fromCharCode(j);
                if (beginWord[i] === c) {
                    continue;
                }
                var temp = beginWord.slice(0, i) + String.fromCharCode(j) + beginWord.slice(i + 1);
                if (map.has(temp) && map.get(temp) === nextDepth) {
                    dfs(temp, endWord, wordList, Array.from(path));
                }
            }
        }
    };
    bfs(beginWord, endWord, wordList);
    dfs(endWord, beginWord, wordList, []);
    return res;
};