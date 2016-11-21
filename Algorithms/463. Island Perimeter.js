/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
    var ans = 0;
    for (var i = 0; i < grid.length; i++) {
        for (var j = 0; j < grid[0].length; j++) {
            if (grid[i][j]) {
                ans += 4;
                if (i < grid.length - 1 && grid[i + 1][j]) {
                    ans -= 2;
                }
                if (grid[i][j + 1]) {
                    ans -= 2;
                }
            }
        }
    }
    return ans;
};