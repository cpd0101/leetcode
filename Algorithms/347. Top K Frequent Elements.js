/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    var map = {};
    var ret = [];
    for (var i = 0; i < nums.length; i++) {
        if (map[nums[i]] === undefined) {
            map[nums[i]] = 1; 
        } else {
            map[nums[i]]++;
        }
    }

    for (var key in map) {
        ret.push({
            num: key,
            cnt: map[key]
        });
    }

    ret.sort(function (a, b) {
        return b.cnt - a.cnt;
    });

    var result = [];

    for (var i = 0; i < k; i++) {
        result.push(+ret[i].num);
    }

    return result;
};