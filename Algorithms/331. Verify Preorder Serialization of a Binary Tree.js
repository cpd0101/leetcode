/**
 * @param {string} preorder
 * @return {boolean}
 */
var isValidSerialization = function (preorder) {
    var arr = preorder.split(',');
    var q = [];
    var c = 1;
    var i = 0;
    while (c && i < arr.length) {
        if (arr[i] !== '#') {
            c += 2;
        }
        i++;
        c--;
    }
    if (c === 0 && i === arr.length) {
        return true;
    } else {
        return false;
    }
};