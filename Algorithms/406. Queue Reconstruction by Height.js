/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function (people) {
    people.sort(function (a, b) {
        if (a[0] !== b[0]) {
            return b[0] - a[0];
        } else {
            return a[1] - b[1];
        }
    });
    var res = [];
    for (var i = 0; i < people.length; i++) {
        var person = people[i];
        res.splice(person[1], 0, person);
    }
    return res;
};