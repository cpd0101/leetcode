/**
 * @param {number} n
 * @param {number[]} primes
 * @return {number}
 */
var nthSuperUglyNumber = function(n, primes) {
    var len = primes.length;
    var index = [];
    var ret = [1];
    for (var i = 0; i < len; i++) {
        index[i] = 0;
    }
    var temp = [];
    for (var i = 1; i < n; i++) {
        for (var j = 0; j < len; j++) {
            temp[j] = ret[index[j]] * primes[j];
        }
        ret[i] = Math.min.apply(null, temp);
        for (var j = 0; j < len; j++) {
            if (temp[j] === ret[i]) {
                index[j] += 1;
            }
        }
    }
    return ret[n - 1];
};