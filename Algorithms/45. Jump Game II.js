/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
    var map = {0: 0};
    var arr = [0];
    var needSort = false;
    var maxIndex = 0;
    for (var i = 0; i < nums.length; i++) {
        var min = i;
        var max = i + nums[i];

        if (min === max) {
            continue;
        }

        if (needSort) {
            arr.sort(function (a, b) {
                return a - b;
            });
            needSort = false;
        }

        if (map[min] === undefined) {
            for (var j = 0; j < arr.length; j++) {
                if (arr[j] > i) {
                    min = arr[j];
                    arr = arr.slice(j);
                    break;
                }
            }
        }

        if (map[max]) {
            map[max] = Math.min(map[max], map[min] + 1); 
        } else if (maxIndex > max) {
            for (var j = 0; j < arr.length; j++) {
                if (arr[j] > max) {
                    map[max] = Math.min(map[arr[j]], map[min] + 1);
                    break;
                }
            }
        } else {
            map[max] = map[min] + 1;
        }

        for (var j = arr.length; j >= 0; j--) {
            if (arr[j] <= max) {
                if (map[arr[j]] > map[max]) {
                    map[arr[j]] = map[max];
                } else {
                    break;
                }
            }
        }

        if (max > min) {
            arr.push(max);
            if (max < maxIndex) {
                needSort = true;
            }
        }

        if (max > maxIndex) {
            maxIndex = max;
        }
    }

    if (map[i - 1] === undefined) {
        if (needSort) {
            arr.sort(function (a, b) {
                return a - b;
            });
            needSort = false;
        }
        for (var j = 0; j < arr.length; j++) {
            if (arr[j] >= i) {
                return map[arr[j]];
            }
        }
    } else {
        return map[i - 1];
    }
};