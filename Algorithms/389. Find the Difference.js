/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
    var sMap = {};
    var tMap = {};
    for (var i = 0; i < s.length; i++) {
        if (sMap[s[i]]) {
            sMap[s[i]]++; 
        } else {
            sMap[s[i]] = 1;
        }
        if (tMap[t[i]]) {
            tMap[t[i]]++;
        } else {
            tMap[t[i]] = 1;
        }
    }
    if (tMap[t[i]]) {
        tMap[t[i]]++;
    } else {
        tMap[t[i]]++;
    }
    for (var key in tMap) {
        if (tMap.hasOwnProperty(key)) {
            if (tMap[key] !== sMap[key]) {
                return key;
            }
        }
    }
    return '';
};