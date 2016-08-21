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
 *     Set this NestedInteger to hold a single integer equal to value.
 *     @return {void}
 *     this.setInteger = function(value) {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a nested list and adds a nested integer elem to it.
 *     @return {void}
 *     this.add = function(elem) {
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
 * @param {string} s
 * @return {NestedInteger}
 */
var deserialize = function (s) {
    if (!s) {
        return null;
    }
    if (s[0] !== '[') {
        var ni = new NestedInteger();
        ni.setInteger(+s);
        return ni;
    }
    var stack = [];
    var curNi = null;
    var temp = [];
    for (var i = 0; i < s.length; i++) {
        var c = s[i];
        if (c === '[') {
            if (curNi !== null) {
                stack.push(curNi);
            }
            curNi = new NestedInteger();
        } else if (c === ']' || c === ',') {
            if (temp.length) {
                var ni = new NestedInteger();
                ni.setInteger(+temp.join(''));
                curNi.add(ni);
                temp = [];
            }
            if (c === ']' && stack.length) {
                var popNi = stack.pop();
                popNi.add(curNi);
                curNi = popNi;
            }
        } else {
            temp.push(c);
        }
    }
    return curNi;
};