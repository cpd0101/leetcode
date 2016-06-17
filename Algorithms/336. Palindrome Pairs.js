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

    var reverse = function (s) {
        var t = '';
        for (var i = s.length - 1; i > -1; i--) {
            t += s[i];
        }
        return t;
    };

    var map = new Map();

    for (var i = 0; i < words.length; i++) {
        map.set(words[i], i);
    }

    var ret = [];

    for (var i = 0; i < words.length; i++) {
        if (map.has('') && words[i] !== '' && isPalindrome(words[i])) {
            ret.push([i, map.get('')]);
            ret.push([map.get(''), i]);
        }

        var rword = reverse(words[i]);
        if (map.has(rword) && rword !== words[i]) {
            ret.push([i, map.get(rword)]);
        }

        for (var j = 1; j < words[i].length; j++) {
            var left = words[i].slice(0, j);
            var right = words[i].slice(j);
            if (isPalindrome(left)) {
                var rright = reverse(right);
                if (map.has(rright)) {
                    ret.push([map.get(rright), i]);
                }
            }
            if (isPalindrome(right)) {
                var rleft = reverse(left);
                if (map.has(rleft)) {
                    ret.push([i, map.get(rleft)]);
                }
            }
        }
    }

    return ret;
};