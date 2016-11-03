/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {number[]}
 */
var findRightInterval = function (intervals) {
    var arr = [];
    for (var i = 0; i < intervals.length; i++) {
        intervals[i].index = i;
        arr.push(intervals[i]);
    }
    arr.sort(function (a, b) {
        return a.start - b.start;
    });
    var find = function (val) {
        var s = 0;
        var e = arr.length - 1;
        while (s < e) {
            var m = Math.floor((s + e) / 2);
            if (arr[m].start > val) {
                e = m;
            } else if (arr[m].start < val) {
                if (s === m) {
                    return arr[e].index;
                } else {
                    s = m;
                }
            } else {
                return arr[m].index;
            }
        }
        return arr[e].index;
    };
    var res = [];
    for (var i = 0; i < intervals.length; i++) {
        var index = find(intervals[i].end);
        if (intervals[i].end > intervals[index].start) {
            res.push(-1);
        } else {
            res.push(index);
        }
    }
    return res;
};