/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function (s, k) {
    var word = {};
    for (var i = 0; i < s.length; i++) {
        if (word[s[i]]) {
            word[s[i]]++;
        } else {
            word[s[i]] = 1;
        }
    }
    var divide = [];
    for (var i = 0; i < s.length; i++) {
        if (word[s[i]] < k) {
            divide.push(i);
        }
    }
    if (!divide.length) {
        return s.length;
    }
    divide.push(s.length);
    var max = 0;
    var pre = 0;
    for (var i = 0; i < divide.length; i++) {
        var len = longestSubstring(s.slice(pre, divide[i]), k);
        if (len > max) {
            max = len;
        }
        pre = divide[i] + 1;
    }
    return max;
};