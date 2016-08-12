/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
    var map1 = {};
    var map2 = {};
    for (var i = 0; i < ransomNote.length; i++) {
        if (map1.hasOwnProperty(ransomNote[i])) {
            map1[ransomNote[i]]++;
        } else {
            map1[ransomNote[i]] = 1;
        }
    }
    for (var i = 0; i < magazine.length; i++) {
        if (map2.hasOwnProperty(magazine[i])) {
            map2[magazine[i]]++;
        } else {
            map2[magazine[i]] = 1;
        }
    }
    for (var key in map1) {
        if (map1.hasOwnProperty(key)) {
            if (!map2.hasOwnProperty(key) || map2[key] < map1[key]) {
                return false;
            }
        }
    }
    return true;
};