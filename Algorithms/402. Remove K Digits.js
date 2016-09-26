/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function (num, k) {
    var res = [];
    var left = num.length - k;
    for (var i = 0; i < num.length; i++) {
        while (k && res.length && res[res.length - 1] > num[i]) {
            res.pop();
            k--;
        }
        res.push(num[i]);
    }
    while (res.length && res[0] === '0') {
        res.shift();
    }
    res = res.slice(0, left);
    return res.length ? res.join('') : '0';
};