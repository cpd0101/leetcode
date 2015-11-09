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
            return Math.max(maxProduct(nums.slice(0, i)), maxProduct(nums.slice(i + 1)), 0);
        } else if (nums[i] < 0) {
            count++;
            pos = i;
        }
        product *= nums[i];
    }

    if (count === 1) {
        return Math.max(maxProduct(nums.slice(0, pos)), maxProduct(nums.slice(pos + 1)));
    } else if (count % 2 === 0) {
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