/**
 * @param {string[]} words
 * @return {number[][]}
 */
var palindromePairs = function (words) {
    var isPalindrome = function (s) {
        for (var i = parseInt(s.length / 2); i > -1; i--) {
            if (s[i] !== s[s.length - 1 - i]) {
                return false;
            }
        }
        return true;
    };

    var map = {};

    for (var i = 0; i < words.length; i++) {
        map[words[i]] = i;
    }

    var ret = [];

    for (var i = 0; i < words.length; i++) {
        if (map.hasOwnProperty('') && words[i] !== '' && isPalindrome(words[i])) {
            ret.push([i, map['']]);
            ret.push([map[''], i]);
        }

        var rword = words[i].split('').reverse().join('');
        if (map.hasOwnProperty(rword) && rword !== words[i]) {
            ret.push([i, map[rword]]);
        }

        for (var j = 1; j < words[i].length; j++) {
            var left = words[i].slice(0, j);
            var right = words[i].slice(j);
            if (isPalindrome(left)) {
                var rright = right.split('').reverse().join('');
                map.hasOwnProperty(rright) && ret.push([map[rright], i]);
            }
            if (isPalindrome(right)) {
                var rleft = left.split('').reverse().join('');
                map.hasOwnProperty(rleft) && ret.push([i, map[rleft]]);
            }
        }
    }

    return ret;
};