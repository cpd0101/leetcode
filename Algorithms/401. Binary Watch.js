/**
 * @param {number} num
 * @return {string[]}
 */
var readBinaryWatch = function (num) {
    var map = {};
    var bitCount = function (n) {
        var str = n.toString(2);
        var cnt = 0;
        if (map[n]) {
            return map[n];
        }
        for (var i = 0; i < str.length; i++) {
            if (str[i] === '1') cnt++;
        }
        map[n] = cnt;
        return cnt;
    };
    var ret = [];
    for (var h = 0; h < 12; h++) {
        for (var m = 0; m < 60; m++) {
            if (bitCount(h) + bitCount(m) === num) {
                if (m < 10) {
                    ret.push(h + ':0' + m);
                } else {
                    ret.push(h + ':' + m);
                }
            }
        }
    }
    return ret;
};