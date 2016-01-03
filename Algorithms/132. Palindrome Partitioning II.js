/**
 * @param {string} s
 * @return {number}
 */
var isPalindrome = function (s) {
    for (var i = parseInt(s.length / 2) - 1; i >= 0; i--) {
        if (s[i] !== s[s.length - 1 - i]) {
            return false;
        }
    }
    return true;
};
var cache = {};
var minCut = function (s) {
    if (cache[s]) {
        return cache[s];
    }
    var min = s.length - 1;
    for (var i = 0; i < s.length; i++) {
        for (var j = s.length - 1; j > i; j--) {
            if (isPalindrome(s.slice(i, j + 1))) {
                var cut = s.slice(0, i).length;
                if (cut < min) {
                    cut += minCut(s.slice(j + 1)) + 1;
                }
                if (cut < min) {
                    min = cut;
                    if (min < s.length - j) {
                        break;
                    }
                }
            }
        }
        if (min < 2 + i) {
            cache[s] = min;
            return min;
        }
    }
    cache[s] = min;
    return min;
};