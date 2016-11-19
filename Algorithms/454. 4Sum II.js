/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
var fourSumCount = function (A, B, C, D) {
    var ans = 0;
    var cnt = {};
    for (var i = 0; i < A.length; i++) {
        for (var j = 0; j < B.length; j++) {
            cnt[A[i] + B[j]] = (cnt[A[i] + B[j]] || 0) + 1;
        }
    }
    for (var i = 0; i < C.length; i++) {
        for (var j = 0; j < D.length; j++) {
            ans += (cnt[-(C[i] + D[j])] || 0);
        }
    }
    return ans;
};