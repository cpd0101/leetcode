/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
/**
 * @constructor
 * @param {NestedInteger[]} nestedList
 */
var NestedIterator = function (nestedList) {
    this.stack = [{
        list: nestedList,
        cur: -1
    }];
};


/**
 * @this NestedIterator
 * @returns {boolean}
 */
NestedIterator.prototype.hasNext = function () {
    while (this.stack.length > 0) {
        var top = this.stack[this.stack.length - 1];
        switch (typeof top.list[top.cur + 1]) {
            case 'object':
                if (top.list[top.cur + 1].isInteger()) {
                    return true;
                } else {
                    top.cur++;
                    this.stack.push({
                        list: top.list[top.cur].getList(),
                        cur: -1
                    });
                }
                break;
            default:
                this.stack.pop();
                break;
        }
    }
    return false;
};

/**
 * @this NestedIterator
 * @returns {integer}
 */
NestedIterator.prototype.next = function () {
    while (this.stack.length > 0) {
        var top = this.stack[this.stack.length - 1];
        top.cur++;
        if (top.list[top.cur] && top.list[top.cur].isInteger()) {
            return top.list[top.cur].getInteger();
        } else {
            this.stack.pop();
        }
    }
};

/**
 * Your NestedIterator will be called like this:
 * var i = new NestedIterator(nestedList), a = [];
 * while (i.hasNext()) a.push(i.next());
*/