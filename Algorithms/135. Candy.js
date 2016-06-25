/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
    var sum = 0;
    var preRating = -Infinity;
    var preCandy = 0;
    var last = 0;
    var map = {};
    for (var i = 0; i < ratings.length; i++) {
        if (ratings[i] > preRating) {
            sum += (++preCandy);
            last = i;
        } else if (ratings[i] < preRating) {
            sum += 1;
            if (preCandy === 1) {
                preCandy = 2;
                var index = last + 1;
                if (map[index] < -1) {
                    map[index]++;
                    sum += (i - index);
                } else {
                    sum += (i - index + 1);
                }
            }
            map[i] = 1 - preCandy;
            preCandy = 1;
        } else {
            preCandy = 1;
            sum += 1;
            last = i;
        }
        preRating = ratings[i];
    }
    return sum;
};