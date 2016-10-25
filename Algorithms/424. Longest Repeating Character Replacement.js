/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
    if (!s) {
        return 0;
    }
    var map = {};
    var pre = s[0];
    var start = 0;
    for (var i = 1; i <= s.length; i++) {
        if (s[i] !== pre) {
            if (map[pre]) {
                map[pre].push([start, i - 1]);
            } else {
                map[pre] = [[start, i - 1]];
            }
            pre = s[i];
            start = i;
        }
    }
    var max = 0;
    for (var key in map) {
        if (map.hasOwnProperty(key)) {
            var item = map[key];
            for (var i = 0; i < item.length; i++) {
                var cnt = k;
                var res = item[i][1] - item[i][0] + 1 + k;
                for (var j = i + 1; j < item.length; j++) {
                    if (cnt >= item[j][0] - item[j - 1][1] - 1) {
                        cnt -= item[j][0] - item[j - 1][1] - 1;
                        res += item[j][1] - item[j][0] + 1;
                    } else {
                        break;
                    }
                }
                max = Math.max(res, max);
                if (j === item.length) {
                    break;
                }
            }
        }
    }
    return Math.min(max, s.length);
};