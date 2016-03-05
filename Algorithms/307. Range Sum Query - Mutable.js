/**
 * @constructor
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.nums = nums;
    this.map = {};
    this.map[-1] = 0;
    for (var i = 0; i < this.nums.length; i++) {
        this.map[i] = this.map[i - 1] + nums[i];
    }
};

/**
 * @param {number} i
 * @param {number} val
 * @return {void}
 */
NumArray.prototype.update = function(i, val) {
    var c = val - this.nums[i];
    this.nums[i] = val;
    for (var j = i; j < this.nums.length; j++) {
        this.map[j] += c;
    }
};

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
    return this.map[j] - this.map[i - 1];
};


/**
 * Your NumArray object will be instantiated and called as such:
 * var numArray = new NumArray(nums);
 * numArray.sumRange(0, 1);
 * numArray.update(1, 10);
 * numArray.sumRange(0, 2);
 */