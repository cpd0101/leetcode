/**
 * Definition for an interval.
 * function Interval (start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
    intervals.sort(function (a, b) {
        if (a.end === b.end) {
            return a.start - b.start;
        } else {
            return a.end - b.end;
        }
    });

    var end = -Infinity;
    var cnt = 0;
    for (var i = 0; i < intervals.length; i++) {
        if (intervals[i].start >= end) {
            cnt++;
            end = intervals[i].end;
        }
    }

    return intervals.length - cnt;
};