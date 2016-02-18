/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
    var add = function (num1, num2) {
        var ret = '';
        var c = 0;
        var len1 = num1.length;
        var len2 = num2.length;
        for (var i = 0; i < len1 && i < len2; i++) {
            var n1 = parseInt(num1[len1 - 1 - i]);
            var n2 = parseInt(num2[len2 - 1 - i]);
            ret = (n1 + n2 + c) % 10 + ret;
            c = parseInt((n1 + n2 + c) / 10);
        }
        while (i < len1) {
            var n = parseInt(num1[len1 - 1 - i]);
            ret = (n + c) % 10 + ret;
            c = parseInt((n + c) / 10);
            i++; 
            if (c === 0) {
                ret = num1.slice(0, len1 - i) + ret;
                break;
            }
        }
        while (i < len2) {
            var n = parseInt(num2[len2 - 1 - i]);
            ret = (n + c) % 10 + ret;
            c = parseInt((n + c) / 10);
            i++;
            if (c === 0) {
                ret = num2.slice(0, len2 - i) + ret;
                break;
            } 
        }
        if (c) {
            ret = c + ret;
        }
        return ret;
    };
    var ret = '0';
    for (var i = num1.length - 1; i >= 0; i--) {
        var n1 = parseInt(num1[i]);
        if (n1 === 0) {
            continue;
        }
        var k = num1.length - 1 - i;
        var temp = '';
        while (k--) {
            temp += '0';
        }
        var c = 0;
        for (var j = num2.length - 1; j >= 0; j--) {
            var n2 = parseInt(num2[j]);
            temp = (n1 * n2 + c) % 10 + temp;
            c = parseInt((n1 * n2 + c) / 10);
        }
        while (c) {
            temp = c % 10 + temp;
            c = parseInt(c / 10);
        }
        ret = add(ret, temp);
    }
    while (ret.length > 1 && ret[0] === '0') {
        ret = ret.slice(1);
    }
    return ret;
};