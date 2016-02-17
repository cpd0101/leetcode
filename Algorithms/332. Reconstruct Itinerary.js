/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function(tickets) {
    var map = {};
    for (var i = 0; i < tickets.length; i++) {
        if (map[tickets[i][0]] === undefined) {
            map[tickets[i][0]] = [tickets[i][1]];
        } else {
            map[tickets[i][0]].push(tickets[i][1]);
        }
    }
    var solve = function (start) {
        var left = [];
        var right = [];
        var temp = map[start];
        if (temp) {
            temp = temp.sort();
        } else {
            return [start];
        }
        while (temp.length) {
            var end = temp.shift();
            var ret = solve(end);
            if (ret.indexOf(start) > -1) {
                left = left.concat(ret);
            } else {
                right = right.concat(ret);
            }
        }
        return [start].concat(left, right);
    };
    return solve('JFK');
};