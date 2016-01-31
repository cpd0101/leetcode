/**
 * @param {string} num
 * @return {boolean}
 */
var isAdditiveNumber = function(num) {
    for (var i = 1; i < num.length; i++) {
        for (var j = i + 1; j < num.length; j++) {
            var pos0 = 0;
            var pos1 = i;
            var pos2 = j;
            var first = num.slice(pos0, pos1);
            var second = num.slice(pos1, pos2);
            if ((first[0] === '0' && first.length > 1) || (second[0] === '0' && second.length > 1)) {
                pos2 = 0;
                break;
            }
            var third = first * 1 + second * 1 + '';
            while (num.indexOf(third, pos2) === pos2) {
                var pos3 = pos2 + third.length;
                pos0 = pos1;
                pos1 = pos2;
                pos2 = pos3;
                first = num.slice(pos0, pos1);
                second = num.slice(pos1, pos2);
                if ((first[0] === '0' && first.length > 1) || (second[0] === '0' && second.length > 1)) {
                    pos2 = 0;
                    break;
                }
                third = first * 1 + second * 1 + '';
            }
            if (pos2 === num.length) {
                return true;
            }
        }
    }
    return false;
};