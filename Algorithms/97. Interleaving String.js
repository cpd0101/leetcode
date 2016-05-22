/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function (s1, s2, s3) {
    var m = s1.length;
    var n = s2.length;
    if (m + n !== s3.length) {
        return false;
    }
    var path = [];
    for (var i = 0; i <= m; i++) {
        path[i] = [];
    }
    for (var i = 0; i <= m; i++) {
        for (var j = 0; j <= n; j++) {
            if (i === 0 && j === 0) {
                path[i][j] = true;
            } else if (i === 0) {
                path[i][j] = path[i][j - 1] && (s2[j - 1] === s3[i + j - 1]);
            } else if (j === 0) {
                path[i][j] = path[i - 1][j] && (s1[i - 1] === s3[i + j - 1]);
            } else {
                path[i][j] = (path[i][j - 1] && (s2[j - 1] === s3[i + j - 1])) ||
                    (path[i - 1][j] && (s1[i - 1] === s3[i + j - 1]));
            }
        }
    }
    return path[m][n];
};