/**
 * @param {string} digits
 * @return {string[]}
 */
var arr = ['', '*', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
var letterCombinations = function(digits) {
    if (digits.length < 1) {
        return [];
    }
    var s = arr[digits[0]];
    var temp = letterCombinations(digits.slice(1));
    var ret = [];
    if (s) {
        for (var i = 0; i < s.length; i++) {
            if (digits.length === 1) {
                ret.push(s[i]);
            } else {
                for (var j = 0; j < temp.length; j++) {
                    ret.push(s[i] + temp[j]);
                }
            }
        }
    }
    return ret;
};