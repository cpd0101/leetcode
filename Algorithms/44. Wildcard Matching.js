/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
    var star = false;
    var tmpi = 0;
    var tmpj = 0;
    for (var i = 0, j = 0; i < s.length; i++, j++) {
        switch (p[j]) {
            case '?':
                break;
            case '*':
                star = true;
                tmpi = i;
                tmpj = j;
                while (p[tmpj] === '*') {
                    tmpj++;
                }
                if (tmpj === p.length) return true;
                i = tmpi - 1;
                j = tmpj - 1;
                break;
            default:
                if (s[i] !== p[j]) {
                    if (!star) return false;
                    tmpi++;
                    i = tmpi - 1;
                    j = tmpj - 1;
                }
                break;
        }
    }
    while (p[j] === '*') {
        j++;
    }
    return j === p.length;
};