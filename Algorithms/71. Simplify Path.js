/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
    var arr = path.split('/');
    var ret = '';
    for (var i = 0; i < arr.length; i++) {
        if (!arr[i] || arr[i] === '.') {
            continue;
        } else if (arr[i] === '..') {
            ret = ret.slice(0, ret.lastIndexOf('/'));
        } else {
            ret = ret + '/' + arr[i];
        }
    }
    return ret ? ret : '/';
};