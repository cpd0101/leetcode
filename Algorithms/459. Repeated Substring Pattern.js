/**
 * @param {string} str
 * @return {boolean}
 */
var repeatedSubstringPattern = function (str) {
    for (var i = parseInt(str.length / 2); i >= 1; i--) {
        if (str.length % i) {
            continue;
        } else {
            if ((new Array(str.length / i + 1)).join(str.slice(0, i)) === str) {
                return true;
            }
        }
    }
    return false;
};