/**
 * @param {number[]} stones
 * @return {boolean}
 */
var canCross = function (stones) {
    var q = [];
    var v = new Map();
    var last = stones[stones.length - 1];
    q.push([0, 0]);
    v.set('0,0', 1);
    while (q.length) {
        var item = q.pop();
        var x = item[0];
        var y = item[1];
        if (x === last) {
            return true;
        }
        var arr = [y - 1, y, y + 1];
        for (var i = 0; i < 3; i++) {
            var next = x + arr[i];
            if (arr[i] > 0 && next <= last) {
                var pos = next + ',' + arr[i];
                if (!v.has(pos) && stones.indexOf(next) > -1) {
                    q.push([next, arr[i]]);
                    v.set(pos, 1);
                }
            }
        }
    }
    return false;
};