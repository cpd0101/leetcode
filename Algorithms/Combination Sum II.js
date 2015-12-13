/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    candidates.sort(function (a, b) {
        return a - b;
    });
    var combinationSortSum2 = function(candidates, target) {
        var ret = [];
        var str = ' ';
        for (var i = 0; i < candidates.length; i++) {
            var item = candidates[i];
            if (item > target) {
                return ret;
            } else if (item === target) {
                ret.push([item]);
                return ret;
            } else {
                var arr = combinationSortSum2(candidates.slice(i + 1), target - item);
                for (var j = 0; j < arr.length; j++) {
                    arr[j].unshift(item);
                    var tempStr = arr[j].join() + ' ';
                    if (str.indexOf(tempStr) === -1) {
                        ret.push(arr[j]);
                        str += tempStr;
                    }
                }
            }
        }
        return ret;
    };
    return combinationSortSum2(candidates, target);
};
