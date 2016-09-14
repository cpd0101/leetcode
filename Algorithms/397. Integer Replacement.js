/**
 * @param {number} n
 * @return {number}
 */
var integerReplacement = function (n) {
    var countTrailZero = function (n) {
        var c = 0;
        while (n % 2 === 0) {
            n = n / 2;
            c++;
        }
        return c;
    };
    var count = 0;
    while (n !== 1) {
        if (n % 2 === 0) {
            n = n / 2;
        } else {
            if (n === 3) {
                n = 2;
            } else if (countTrailZero(n + 1) > countTrailZero(n - 1)) {
                n = n + 1;
            } else {
                n = n - 1;
            }
        }
        count++;
    }
    return count;
};