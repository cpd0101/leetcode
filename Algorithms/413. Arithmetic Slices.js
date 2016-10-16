/**
 * @param {number[]} A
 * @return {number}
 */
var numberOfArithmeticSlices = function (A) {
    var res = 0;
    var c = 0;
    for (var i = 2; i < A.length; i++) {
        if (A[i] - A[i - 1] === A[i - 1] - A[i - 2]) {
            res += ++c;
        } else {
            c = 0;
        }
    }
    return res;
};