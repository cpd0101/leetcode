/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    var start = 1;
    var end = x;
    while (start < end) {
        var mid = parseInt((start + end) / 2);
        if (mid * mid > x) {
            end = mid;
        } else {
            if (start === mid) {
                break;
            } else {
                start = mid;
            }
        }
    }
    if (end * end > x) {
        return start;
    } else {
        return end;
    }
};