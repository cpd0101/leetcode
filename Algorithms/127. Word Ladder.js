/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {Set} wordList
 *   Note: wordList is a Set object, see:
 *   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
 * @return {number}
 */
var ladderLength = function (beginWord, endWord, wordList) {
    var path = [];
    path.push(beginWord);
    var count = 1;
    var level = 1;
    if (wordList.has(beginWord)) {
        wordList.delete(beginWord);
    }
    while (path.length) {
        var curWord = path.shift();
        count--;
        for (var i = 0; i < curWord.length; i++) {
            var start = 'a'.charCodeAt();
            var end = 'z'.charCodeAt();
            for (var j = start; j <= end; j++) {
                var c = String.fromCharCode(j);
                if (curWord[i] === c) {
                    continue;
                }
                var temp = curWord.slice(0, i) + String.fromCharCode(j) + curWord.slice(i + 1);
                if (temp === endWord) {
                    return level + 1;
                }
                if (wordList.has(temp)) {
                    path.push(temp);
                    wordList.delete(temp);
                }
            }
        }
        if (count === 0) {
            count = path.length;
            level++;
        }
    }
    return 0;
};