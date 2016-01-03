/**
 * @param {string} s
 * @return {string[][]}
 */
var isPalindrome = function (s) {
    for (var i = parseInt(s.length / 2) - 1; i >= 0; i--) {
        if (s[i] !== s[s.length - 1 - i]) {
            return false;
        }
    }
    return true;
};
var partition = function (s) {
    var ret = [];
    ret.push(s.split(''));
    for (var i = 0; i < s.length; i++) {
        for (var j = i + 1; j < s.length; j++) {
            if (isPalindrome(s.slice(i, j + 1))) {
                var arr = s.slice(0, i).split('').concat([s.slice(i, j + 1)]);
                var temp = partition(s.slice(j + 1));
                for (var k = 0; k < temp.length; k++) {
                    ret.push(arr.concat(temp[k]));
                }
            }
        }
    }
    return ret;
};