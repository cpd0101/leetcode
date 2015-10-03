/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    var min = a.length < b.length ? a.length : b.length;
    var str = '';
    var carry = 0;
    var sum, j;
    for (var i = 1; i <= min; i++) {
        sum = Math.floor(a[a.length - i]) + Math.floor(b[b.length - i]) + carry;
        if (sum > 1) {
            carry = 1;
            str = sum % 2 + str;
        } else {
            str = sum + str;
            carry = 0;
        }
    }
    if (a.length > b.length) {
        for (j = i; j <= a.length; j++) {
            sum = Math.floor(a[a.length - j]) + carry;
            if (sum > 1) {
                carry = 1;
                str = sum % 2 + str;
            } else {
                str = sum + str;
                carry = 0;
            }
        }
    } else {
        for (j = i; j <= b.length; j++) {
            sum = Math.floor(b[b.length - j]) + carry;
            if (sum > 1) {
                carry = 1;
                str = sum % 2 + str;
            } else {
                str = sum + str;
                carry = 0;
            }
        }
    }
    if (carry) str = carry + str;
    return str;
};