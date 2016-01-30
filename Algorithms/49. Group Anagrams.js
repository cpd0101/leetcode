/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    var map = {};
    for (var i = 0; i < strs.length; i++) {
        var key = strs[i].split('').sort().join('');
        if (map[key]) {
            map[key].push(strs[i]);
        } else {
            map[key] = [strs[i]];
        }
    }
    var ret = [];
    for (var key in map) {
        if (map.hasOwnProperty(key)) {
            ret.push(map[key].sort());
        }
    }
    return ret;
};