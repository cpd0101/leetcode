/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    var carry = 1;
    for (var i = digits.length - 1; i > -1; i--) {
        var sum = carry + digits[i];
        if (sum > 9) {
            digits[i] = sum % 10;
            carry = Math.floor(sum / 10);
        } else {
            digits[i] = sum;
            carry = 0;
        }
        if (carry === 0) break;
    }
    if (carry) digits.unshift(1);
    return digits;
};