/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
    var index = [0, 0, 0];
    var primes = [2, 3, 5];
    var ret = [1];
    var temp = [];
    for (var i = 1; i < n; i++) {
        for (var j = 0; j < 3; j++) {
            temp[j] = ret[index[j]] * primes[j];
        }
        ret[i] = Math.min.apply(null, temp);
        for (var j = 0; j < 3; j++) {
            if (temp[j] === ret[i]) {
                index[j] += 1;
            }
        }
    }
    return ret[n - 1];
};