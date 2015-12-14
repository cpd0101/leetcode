/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
    var start = 0;
    var end = nums.length - 1;
    while (start + 1 < end) {
        var mid = parseInt((start + end) / 2);
        if (nums[mid] > target) {
            if (nums[start] <= target) {
                end = mid;
            } else {
                if (nums[mid] < nums[end]) {
                    end = mid;
                } else {
                    if (nums[mid] === nums[end]) {
                        for (var i = mid + 1; i < end; i++) {
                            if (nums[i] !== nums[mid]) {
                                start = mid;
                                break;
                            }
                        }
                        if (i === end) {
                            end = mid;
                        }
                    } else {
                        start = mid;
                    }
                }
            }
        } else {
            if (nums[end] >= target) {
                start = mid;
            } else {
                if (nums[mid] > nums[start]) {
                    start = mid;
                } else {
                    if (nums[mid] === nums[start]) {
                        for (var i = start + 1; i < mid; i++) {
                            if (nums[i] !== nums[mid]) {
                                end = mid;
                                break;
                            }
                        }
                        if (i === mid) {
                            start = mid;
                        }
                    } else {
                        end = mid;
                    }
                }
            }
        }
    }
    if (nums[start] === target) {
        return true;
    }
    if (nums[end] === target) {
        return true;
    }
    return false;
};