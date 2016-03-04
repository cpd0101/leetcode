/**
 * @param {string} s
 * @return {number}
 */

var numDecodings = function (s) {
    var map = {};
    var ways = function (s) {
        if (map[s] !== undefined) {
            return map[s];
        }
        if (s.length === 0) {
            return 1;
        } else {
            if (s[0] === '0') {
                return 0;
            } else {
                if (s.length === 1) {
                    return 1;
                } else {
                    if (parseInt(s.slice(0, 2)) <= 26) {
                        map[s] = ways(s.slice(1)) + ways(s.slice(2));
                        return map[s];
                    } else {
                        map[s] = ways(s.slice(1));
                        return map[s];
                    }
                }
            }
        }
    };
    if (s) {
        return ways(s);
    } else {
        return 0;
    }
};