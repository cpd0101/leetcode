/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
    var left = {};
    var right = {};
    var max = nums1.length >= nums2.length ? nums1 : nums2;
    var min = nums1.length < nums2.length ? nums1 : nums2;
    var ret = [];
    for (var i = 0; i < min.length; i++) {
        if (left[min[i]] === undefined) {
            left[min[i]] = 1;
        } else {
            left[min[i]]++;
        }

        if (right[min[i]] && right[min[i]] >= left[min[i]]) {
            ret.push(min[i]);
        }

        if (right[max[i]] === undefined) {
            right[max[i]] = 1;
        } else {
            right[max[i]]++;
        }

        if (left[max[i]] && left[max[i]] >= right[max[i]]) {
            ret.push(max[i]);
        }

    }

    for (var i = min.length; i < max.length; i++) {
        if (right[max[i]] === undefined) {
            right[max[i]] = 1;
        } else {
            right[max[i]]++;
        }

        if (left[max[i]] && left[max[i]] >= right[max[i]]) {
            ret.push(max[i]);
        }
    }

    return ret;
};