/**
 * @param {number[]} A
 * @return {number}
 */
var maxRotateFunction = function (A) {
    if (A.length < 2) {
        return 0;
    }

    var rotoalValue = 0;
    var sum = 0;
    for (var i = 0; i < A.length; i++) {
        sum += A[i];
        rotoalValue += i * A[i];
    }

    var max = rotoalValue;
    for (var i = A.length - 1; i > 0; i--) {
        rotoalValue = rotoalValue + sum - A.length * A[i];
        max = Math.max(max, rotoalValue);
    }

    return max;
};