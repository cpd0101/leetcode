/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
    var data = new Map();
    if (words.length === 0 || s.length === 0) {
        return [];
    }
    for (var i = 0; i < words.length; i++) {
        if (data.has(words[i])) {
            data.set(words[i], data.get(words[i]) + 1);
        } else {
            data.set(words[i], 1);
        }
    }
    var now = new Map();
    var wordSize = words[0].length;
    var len = s.length - (words.length * wordSize);
    var res = [];
    for (var i = 0; i <= len; i++) {
        now.clear();
        var fromIndex = i;
        for (var j = 0; j < words.length; j++) {
            var word = s.slice(fromIndex, fromIndex + wordSize);
            if (data.has(word)) {
                if (now.has(word)) {
                    now.set(word, now.get(word) + 1);
                } else {
                    now.set(word, 1);
                }
                if (now.get(word) > data.get(word)) {
                    break;
                }
            } else {
                break;
            }
            fromIndex = fromIndex + wordSize;
        }

        if (j === words.length) {
            res.push(i);
        }
    }
    return res;
};