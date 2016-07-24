/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function (nums1, nums2, k) {
    var len1 = nums1.length;
    var len2 = nums2.length;
    var cnt = Math.min(k, len1 * len2);
    var index = [];
    var ans = [];
    while (cnt-- > 0) {
        var temMin = Infinity;
        var m = 0;
        for (var i = 0; i < len1; i++) {
            if (typeof index[i] !== 'number') {
                index[i] = 0;
            }
            if (index[i] < len2 && nums1[i] + nums2[index[i]] < temMin) {
                temMin = nums1[i] + nums2[index[i]];
                m = i;
            }
        }
        ans.push([nums1[m], nums2[index[m]++]]);
    }
    return ans;
};