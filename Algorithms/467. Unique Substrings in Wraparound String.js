/**
 * @param {string} p
 * @return {number}
 */
var findSubstringInWraproundString = function(p) {
    var pattern = 'zabcdefghijklmnopqrstuvwxyz';
    var map = {};
    var start = 0;
    var end = 0;
    for (var i = 0; i < p.length; i++) {
        if (i && pattern.indexOf(p.slice(i - 1, i + 1)) === -1) {
            for (var j = start; j < end; j++) {
                map[p[j]] = Math.max(map[p[j]] || 0, end - j);
            }
            start = i;
        }
        end = i + 1;
    }
    for (var j = start; j < end; j++) {
        map[p[j]] = Math.max(map[p[j]] || 0, end - j);
    }
    var ans = 0;
    for (var key in map) {
        ans += map[key] || 0;
    }
    return ans;
};