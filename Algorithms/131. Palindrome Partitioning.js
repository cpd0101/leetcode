/**
 * @param {string} s
 * @return {string[][]}
 */
var isPalindrome = function (s) {
    for (var i = parseInt(s.length / 2) - 1; i >= 0; i--) {
        if (s[i] !== s[s.length - 1 - i]) {
            return false;
        }
    }
    return true;
};
var map = {};
var partition = function (s) {
    if (s.length === 0) {
        return [];
    } else if (s.length < 2) {
        return [[s]];
    } else {
        if (map[s]) {
            return map[s];
        }

        var ret = [];
        var str = '';
        var len = s.length - 1;
        var head = false;
        var index = s.lastIndexOf(s[0], len - 1);

        while (index > 0) {
            if (isPalindrome(s.slice(0, index + 1))) {
                head = true;
                break;
            } else {
                index = s.lastIndexOf(s[0], index - 1);
            }
        }

        if (head) {
            var temp = partition(s.slice(1));
            for (var i = 0; i < temp.length; i++) {
                var tempItem = [s[0]].concat(temp[i]);
                var tempStr = '|' + tempItem.join() + '|';
                if (str.indexOf(tempStr) === -1) {
                    ret.push(tempItem);
                    str += tempStr;
                }
            }
            var left = partition(s.slice(0, index + 1));
            var right = partition(s.slice(index + 1));
            for (var i = 0; i < left.length; i++) {
                for (var j = 0; j < right.length; j++) {
                    var tempItem = left[i].concat(right[j]);
                    var tempStr = '|' + tempItem.join() + '|';
                    if (str.indexOf(tempStr) === -1) {
                        ret.push(tempItem);
                        str += tempStr;
                    }
                }
            }
        }

        var rear = false;
        var index = s.indexOf(s[len], 1);

        while (index < len && index > -1) {
            if (isPalindrome(s.slice(index, len + 1))) {
                rear = true;
                break;
            } else {
                index = s.indexOf(s[len], index + 1);
            }
        }

        if (rear) {
            var temp = partition(s.slice(0, len));
            for (var i = 0; i < temp.length; i++) {
                var tempItem = temp[i].concat([s[len]]);
                var tempStr = '|' + tempItem.join() + '|';
                if (str.indexOf(tempStr) === -1) {
                    ret.push(tempItem);
                    str += tempStr;
                }
            }
            var left = partition(s.slice(0, index));
            var right = partition(s.slice(index));
            for (var i = 0; i < left.length; i++) {
                for (var j = 0; j < right.length; j++) {
                    var tempItem = left[i].concat(right[j]);
                    var tempStr = '|' + tempItem.join() + '|';
                    if (str.indexOf(tempStr) === -1) {
                        ret.push(tempItem);
                        str += tempStr;
                    }
                }
            }
        }

        if (!head && !rear) {
            var temp = partition(s.slice(1));
            for (var i = 0; i < temp.length; i++) {
                var tempItem = [s[0]].concat(temp[i]);
                ret.push(tempItem);
            }
        }

        if (isPalindrome(s)) {
            ret.push([s]);
        }

        map[s] = ret;

        return ret;
    }
};