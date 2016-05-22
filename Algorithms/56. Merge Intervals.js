/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
var merge = function (intervals) {
    intervals.sort(function (a, b) {
        return a.start - b.start;
    });
    var ret = [];
    var temp = null;
    for (var i = 0; i < intervals.length; i++) {
        if (temp === null) {
            temp = intervals[i];
        } else {
            if (intervals[i].start > temp.end) {
                ret.push(temp);
                temp = intervals[i];
            } else {
                if (temp.end < intervals[i].end) {
                    temp.end = intervals[i].end;
                }
            }
        }
    }

    if (temp) {
        ret.push(temp);
    }

    return ret;
};