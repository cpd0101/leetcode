/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    var ret = [];
    for (var i = 0; i < n; i++) {
        ret[i] = [];
    }
    var i = 0;
    var j = 0;
    var d = 0;
    var c = 0;
    while (true) {
        var flag = true;
        while (j > -1 && j < n && i > -1 && i < n) {
            if (ret[i][j] === undefined) {
                ret[i][j] = ++c;
                flag = false;
            } else {
                break;
            }
            switch (d % 4) {
                case 0:
                    j++;
                    break;
                case 1:
                    i++;
                    break;
                case 2:
                    j--;
                    break;
                case 3:
                    i--;
                    break;
            }
        }
        if (flag) {
            return ret;
        }
        switch (d % 4) {
            case 0:
                j = j - 1;
                i = i + 1;
                break;
            case 1:
                i = i - 1;
                j = j - 1;
                break;
            case 2:
                j = j + 1;
                i = i - 1;
                break;
            case 3:
                i = i + 1;
                j = j + 1;
                break;
        }
        d++;
    }
};