/**
 * @constructor
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.arr = [];
    var sum = 0;
    for (var i = 0; i < nums.length; i++) {
        this.arr.push(sum);
        sum += nums[i];
    }
    this.arr.push(sum);
};

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
    return this.arr[j + 1] - this.arr[i];
};


/**
 * Your NumArray object will be instantiated and called as such:
 * var numArray = new NumArray(nums);
 * numArray.sumRange(0, 1);
 * numArray.sumRange(0, 2);
 */