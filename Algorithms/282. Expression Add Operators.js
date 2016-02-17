/**
 * @param {string} num
 * @param {number} target
 * @return {string[]}
 */
var addOperators = function(num, target) {
    var ret = [];
    var dfs = function (num, target, temp, currRes, prevNum) {
        if (num.length === 0 && currRes === target) {
            ret.push(temp);
            return;
        }
        for (var i = 1; i <= num.length; i++) {
            var currStr = num.slice(0, i);
            if (currStr.length > 1 && currStr[0] === '0') {
                return;
            }
            var currNum = parseInt(currStr);
            var next = num.slice(i);
            if (temp) {
                dfs(next, target, temp + '*' + currStr, (currRes - prevNum) + prevNum * currNum, prevNum * currNum);
                dfs(next, target, temp + '+' + currStr, currRes + currNum, currNum);
                dfs(next, target, temp + '-' + currStr, currRes - currNum, -currNum);
            } else {
                dfs(next, target, currStr, currNum, currNum);
            }
        }
    };
    dfs(num, target, '', 0, 0);
    return ret;
};