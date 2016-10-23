/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
    var ans = [];
    var pmap = {};
    for (var i = 0; i < p.length; i++) {
        if (pmap[p[i]]) {
            pmap[p[i]]++;
        } else {
            pmap[p[i]] = 1;
        }
    }
    var equal = function (a, b) {
        for (var key in b) {
            if (a[key] !== b[key]) {
                return false;
            }
        }
        return true;
    }
    var smap = {};
    for (var i = 0; i < s.length; i++) {
        if (smap[s[i]]) {
            smap[s[i]]++;
        } else {
            smap[s[i]] = 1;
        }
        if (i >= p.length) {
            smap[s[i - p.length]]--;
        }
        if (equal(smap, pmap)) {
            ans.push(i - p.length + 1);
        }
    }
    return ans;
};