/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    var num = 0;
    for (var i = 0; i < grid.length; i++) {
        for (var j = 0; j < grid[i].length; j++) {
            if (grid[i][j] == 1) {
                var stack = [[i, j]];
                while (stack.length) {
                    var pos = stack.pop();
                    grid[pos[0]][pos[1]] = 2;
                    if (pos[0] + 1 < grid.length && grid[pos[0] + 1][pos[1]] == 1) {
                        stack.push([pos[0] + 1, pos[1]]);
                    }
                    if (pos[0] - 1 > -1 && grid[pos[0] - 1][pos[1]] == 1) {
                        stack.push([pos[0] - 1, pos[1]]);
                    }
                    if (grid[pos[0]][pos[1] + 1] == 1) {
                        stack.push([pos[0], pos[1] + 1]);
                    }
                    if (grid[pos[0]][pos[1] - 1] == 1) {
                        stack.push([pos[0], pos[1] - 1]);
                    }
                }
                num++;
            }
        }
    }
    return num;
};