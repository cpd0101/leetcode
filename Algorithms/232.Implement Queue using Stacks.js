/**
 * @constructor
 */
var Queue = function() {
    this.arr = [];
};

/**
 * @param {number} x
 * @returns {void}
 */
Queue.prototype.push = function(x) {
    this.arr.push(x);
};

/**
 * @returns {void}
 */
Queue.prototype.pop = function() {
    this.arr.shift();
};

/**
 * @returns {number}
 */
Queue.prototype.peek = function() {
    return this.arr[0];
};

/**
 * @returns {boolean}
 */
Queue.prototype.empty = function() {
    return this.arr.length === 0;
};