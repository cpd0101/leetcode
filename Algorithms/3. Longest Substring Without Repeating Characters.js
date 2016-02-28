/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    var max = 0;
    var start = 0;
    var pos = {};
    for (var i = 0; i < s.length; i++) {
        if (pos[s[i]] !== undefined && pos[s[i]] >= start) {
            if (i - start > max) {
                max = i - start;
            }
            start = pos[s[i]] + 1;  
        }
        pos[s[i]] = i;
    }
    if (i - start > max) {
        max = i - start;
    }
    return max;
};