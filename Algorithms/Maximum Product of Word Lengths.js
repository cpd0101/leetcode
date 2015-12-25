/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function(words) {
    words.sort(function (a, b) {
        return b.length - a.length;
    });
    var max = 0;
    for (var i = 0; i < words.length - 1; i++) {
        for (var j = i + 1; j < words.length; j++) {
            if (words[i].length * words[j].length <= max) {
                break;
            }
            var flag = true;
            for (var k = 0; k < words[j].length; k++) {
                if (words[i].indexOf(words[j][k]) !== -1) {
                    flag = false;
                    break;
                }
            }
            if (flag) {
                max = words[i].length * words[j].length;
            }
        }
    }
    return max;
};