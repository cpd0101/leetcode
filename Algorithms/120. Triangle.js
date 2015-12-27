/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    var min = function (a, b) {
        if (a == undefined) {
            return b;
        }
        if (b == undefined) {
            return a;
        }
        return Math.min(a, b);
    };
    for (var i = 1; i < triangle.length; i++) {
        for (var j = 0; j < triangle[i].length; j++) {
            triangle[i][j] += min(triangle[i - 1][j - 1], triangle[i - 1][j]);
        }
    }
    return Math.min.apply(null, triangle[triangle.length - 1]);
};