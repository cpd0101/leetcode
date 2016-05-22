/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
    var map = {};
    var max = nums1.length > nums2.length ? nums1 : nums2;
    var min = nums1.length < nums2.length ? nums1 : nums2;
    var ret = [];
    for (var i = 0; i < min.length; i++) {
        if (map[min[i]] === undefined) {
            map[min[i]] = 0;
        } else if (map[min[i]] === 1) {
            ret.push(min[i]);
            map[min[i]] = 2;
        }

        if (map[max[i]] === undefined) {
            map[max[i]] = 1;
        } else if (map[max[i]] === 0) {
            ret.push(max[i]);
            map[max[i]] = 2;
        }
    }

    for (var i = min.length; i < max.length; i++) {
        if (map[max[i]] === 0) {
            ret.push(max[i]);
            map[max[i]] = 2;
        }
    }

    return ret;
};