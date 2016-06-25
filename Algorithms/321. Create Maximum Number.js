/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[]}
 */
var maxNumber = function (nums1, nums2, k) {
    var getMax = function (nums, t) {
        var ans = [];
        if (t === 0) {
            return ans;
        }
        for (var i = 0; i < nums.length; i++) {
            while (ans.length && nums[i] > ans[ans.length - 1] && ans.length + nums.length - i > t) {
                ans.pop();
            }
            if (ans.length < t) {
                ans.push(nums[i]);
            }
        }
        return ans;
    };

    var compare = function (nums1, nums2) {
        if (nums1.length === 0) {
            return -1;
        }
        if (nums2.length === 0) {
            return 1;
        }
        var min = Math.min(nums1.length, nums2.length);
        for (var i = 0; i < min; i++) {
            if (nums1[i] !== nums2[i]) {
                return nums1[i] - nums2[i];
            }
        }
        return nums1.length - nums2.length;
    };

    var merge = function (nums1, nums2) {
        var ans = [];
        while(nums1.length || nums2.length) {
            if (compare(nums1, nums2) > 0) {
                ans.push(nums1[0]);
                nums1 = nums1.slice(1);
            } else {
                ans.push(nums2[0]);
                nums2 = nums2.slice(1);
            }
        }
        return ans;
    };

    var res = [];
    var len = Math.min(k, nums1.length);
    for (var i = Math.max(0, k - nums2.length); i <= len; i++) {
        var tmp = merge(getMax(nums1, i), getMax(nums2, k - i));
        if (compare(tmp, res) > 0) {
            res = tmp;
        }
    }

    return res;
};