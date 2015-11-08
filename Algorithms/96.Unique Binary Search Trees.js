/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    if (n === 1) {
        return 1;
    } else {
        var sum = 2 *  numTrees(n - 1);
        for (var i = 1; i < n / 2; i++) {
            if (i === n - 1 - i) {
                sum += numTrees(i) * numTrees(n - 1 - i);
            } else {
                sum += numTrees(i) * numTrees(n - 1 - i) * 2;
            }
        }
        return sum;
    }
};