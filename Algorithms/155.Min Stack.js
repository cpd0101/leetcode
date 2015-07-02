/**
 * @constructor
 */
var MinStack = function() {
	this.stack = [];
	this.min = [];
};

/**
 * @param {number} x
 * @returns {void}
 */
MinStack.prototype.push = function(x) {
	var stack = this.stack;
	var min = this.min;
	stack.push(x);
	var len = min.length;
	if (len === 0 || min[len - 1] >= x) {
		min.push(x);
	}
};

/**
 * @returns {void}
 */
MinStack.prototype.pop = function() {
	var stack = this.stack;
	var min = this.min;
	if (stack.pop() === min[min.length - 1]) {
		min.pop();
	}
};

/**
 * @returns {number}
 */
MinStack.prototype.top = function() {
	var stack = this.stack;
	return stack[stack.length - 1];
};

/**
 * @returns {number}
 */
MinStack.prototype.getMin = function() {
	var min = this.min;
	return min[min.length - 1];
};