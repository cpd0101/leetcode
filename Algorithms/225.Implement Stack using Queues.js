/**
 * @constructor
 */
var Stack = function() {
    this.arr = [];
};

/**
 * @param {number} x
 * @returns {void}
 */
Stack.prototype.push = function(x) {
    this.arr.push(x);
};

/**
 * @returns {void}
 */
Stack.prototype.pop = function() {
    this.arr.pop();
};

/**
 * @returns {number}
 */
Stack.prototype.top = function() {
    return this.arr[this.arr.length - 1]
};

/**
 * @returns {boolean}
 */
Stack.prototype.empty = function() {
    if (this.arr.length === 0) {
    	return true;
    } else {
    	return false;
    }
};