/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function (s) {
    var start = {};
    var end = {};
    for (var i = 0; i < s.length; i++) {
        if (start[s[i]] === undefined) {
            start[s[i]] = [i];
        } else {
            start[s[i]].push(i);
        }
        end[s[i]] = i;
    }
    var keys = [];
    var values = [];
    for (var key in start) {
        keys.push(key);
        values.push(end[key]);
    }
    keys.sort();
    values.sort(function (a, b) {
        return a - b;
    });
    var ret = '';
    var pos = 0;
    while (keys.length) {
        for (var i = 0; i < keys.length; i++) {
            start[keys[i]] = start[keys[i]].filter(function (item) {
                return item >= pos;
            });
            if (start[keys[i]][0] <= values[0]) {
                break;
            }
        }
        pos = start[keys[i]][0] + 1;
        ret += keys[i];
        values.splice(values.indexOf(end[keys[i]]), 1);
        keys.splice(i, 1);
    }
    return ret;
};