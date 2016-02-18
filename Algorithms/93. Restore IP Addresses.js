/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
    var isIp = function (s) {
        if (s.length > 1 && s[0] == '0') {
            return false;
        }
        var n = parseInt(s);
        if (n < 256) {
            return true;
        }
        return false;
    };
    var ret = [];
    for (var i = 1; i < s.length; i++) {
        var ip1 = s.slice(0, i);
        if (!isIp(ip1)) break;
        for (var j = i + 1; j < s.length; j++) {
            var ip2 = s.slice(i, j);
            if (!isIp(ip2)) break;
            for (var k = j + 1; k < s.length; k++) {
                var ip3 = s.slice(j, k);
                if (!isIp(ip3)) break;
                var ip4 = s.slice(k);
                if (isIp(ip4)) {
                    ret.push(ip1 + '.' + ip2 + '.' + ip3 + '.' + ip4);
                }
            }
        }
    }
    return ret;
};