/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function (s) {
    var ret = [];
    var cache = {};
    for (var i = s.length - 10; i > -1; i--) {
        var sub = s.slice(i, i + 10);
        if (cache[sub] === undefined) {
            cache[sub] = 1;
        } else if (cache[sub] === 1) {
            ret.push(sub);
            cache[sub] = 2;
        }
    }
    return ret;
};