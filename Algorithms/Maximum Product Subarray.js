/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    if (nums.length === 1) {
        return nums[0];
    } else if (nums.length === 0) {
        return 0;
    }

    var count = 0;
    var pos = 0;
    var product = 1;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            return Math.max(maxProduct(nums.slice(0, i)), maxProduct(nums.slice(i + 1)), nums[i]);
        } else if (nums[i] < 0) {
            count++;
            pos = i;
        } else {
            product *= nums[i];
        }
    }

    if (count === 1) {
        return Math.max(maxProduct(nums.slice(0, pos)), maxProduct(nums.slice(pos + 1)), nums[pos]);
    } else if (count === 0) {
        return product;
    }

    var min = 1;
    var max = 1;
    for (i = 0; i < nums.length; i++) {
        if (min > 0) {
            min *= nums[i];
        } else {
            break;
        }
    }

    for (var j = nums.length - 1; j > i; j--) {
        if (max > 0) {
            max *= nums[j];
        } else {
            break;
        }
    }

    if (i === j) {
        if (nums[i] > 0) {
            if ((max > 0 && min > 0) || (min < 0 && max < 0)) {
                return min * max * nums[i];
            } else {
                return Math.max(min, max) * nums[i];
            }
        } else {
            if ((max < 0 && min > 0) || (min < 0 && max > 0)) {
                return min * max * nums[i];
            } else if (min < 0 && max < 0) {
                return Math.min(min, max) * nums[i];
            } else {
                return Math.max(min, max);
            }
        }
    }

    if (i > j) {
        return min;
    }

    product = Math.min(min, max);

    for (; i <= j; i++) {
        product *= nums[i];
    }

    if (product > 0) {
        return product;
    } else {
        return product * Math.max(min, max);
    }

};