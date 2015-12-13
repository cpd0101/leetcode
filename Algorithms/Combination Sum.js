/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    candidates.sort(function (a, b) {
        return a - b;
    });
    var combinationSortSum = function(candidates, target) {
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
                var arr = combinationSortSum(candidates, target - item);
                for (var j = 0; j < arr.length; j++) {
                    var min = 0;
                    var max = arr[j].length - 1;
                    while (min < max) {
                        var mid = parseInt((min + max) / 2);
                        if (arr[j][mid] > item) {
                            max = mid;
                        } else {
                            if (min === mid) {
                                break;
                            } else {
                                min = mid;
                            }
                        }
                    }
                    if (item > arr[j][max]) {
                        arr[j].splice(max + 1, 0, item);
                    } else if (item < arr[j][min]) {
                        arr[j].splice(min, 0, item);
                    } else {
                        arr[j].splice(max, 0, item); 
                    }
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
    return combinationSortSum(candidates, target);
};