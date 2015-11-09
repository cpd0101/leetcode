/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
    var words = str.split(' ');
    var len = pattern.length;
    var obj = {};
    if (len != words.length) return false;
    for (var i = 0; i < len; i++) {
        if ((obj[pattern[i]] && obj[pattern[i]] != words[i]) ||
            (obj[words[i]] && obj[words[i]] != pattern[i])) {
            return false;
        } else {
            obj[pattern[i]] = words[i];
            obj[words[i]] = pattern[i];
        }
    }
    return true;
};