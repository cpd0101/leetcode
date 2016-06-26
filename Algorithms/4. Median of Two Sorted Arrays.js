/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    var m = nums1.length;
    var n = nums2.length;
    var mid = parseInt((m + n) / 2);
    var num = 0;
    var i = 0;
    var j = 0;
    var temp = 0;
    while (num < mid && i < nums1.length && j < nums2.length) {
        if (nums1[i] < nums2[j]) {
            temp = nums1[i];
            i++;
            num++;
        } else {
            temp = nums2[j];
            j++;
            num++;
        }
    }
    if ((m + n) % 2 === 0) {
        if (num === mid) {
            if (i < nums1.length && j < nums2.length) {
                if (nums1[i] < nums2[j]) {
                    return (temp + nums1[i]) / 2;
                } else {
                    return (temp + nums2[j]) / 2;
                }
            } else if (i < nums1.length) {
                return (temp + nums1[i]) / 2;
            } else {
                return (temp + nums2[j]) / 2;
            }
        } else {
            if (i < nums1.length) {
                return (nums1[i + mid - num - 1] + nums1[i + mid - num]) / 2;
            } else {
                return (nums2[j + mid - num - 1] + nums2[j + mid - num]) / 2;
            }
        }
    } else {
        if (num === mid) {
            if (i < nums1.length && j < nums2.length) {
                if (nums1[i] < nums2[j]) {
                    return nums1[i];
                } else {
                    return nums2[j];
                }
            } else if (i < nums1.length) {
                return nums1[i];
            } else {
                return nums2[j];
            }
        } else {
            if (i < nums1.length) {
                return nums1[i + mid - num];
            } else {
                return nums2[j + mid - num];
            }
        }
    }
};