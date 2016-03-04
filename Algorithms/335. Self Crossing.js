/**
 * @param {number[]} x
 * @return {boolean}
 */
var isSelfCrossing = function (x) {
    var curX = 0;
    var curY = 0;
    var visit = {};
    visit[[0, 0]] = 1;
    for (var i = 0; i < x.length; i++) {
        switch (i % 4) {
            case 0:
                for (var j = curY + 1; j <= curY + x[i]; j++) {
                    if (visit[[curX, j]]) {
                        return true;
                    } else {
                        visit[[curX, j]] = 1;
                    }
                }
                curY += x[i];
                break;
            case 1:
                for (var j = curX - 1; j >= curX - x[i]; j--) {
                    if (visit[[j, curY]]) {
                        return true;
                    } else {
                        visit[[j, curY]] = 1;
                    }
                }
                curX -= x[i];
                break;
            case 2:
                for (var j = curY - 1; j >= curY - x[i]; j--) {
                    if (visit[[curX, j]]) {
                        return true;
                    } else {
                        visit[[curX, j]] = 1;
                    }
                }
                curY -= x[i];
                break;
            case 3:
                for (var j = curX + 1; j <= curX + x[i]; j++) {
                    if (visit[[j, curY]]) {
                        return true;
                    } else {
                        visit[[j, curY]] = 1;
                    }
                }
                curX += x[i];
                break;
        }
    }
    return false;
};