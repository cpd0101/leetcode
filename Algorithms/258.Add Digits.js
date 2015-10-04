/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    var sum = 0;
    while (num > 9) {
        while (num > 0) {
            sum += num % 10;
            num = Math.floor(num / 10);
        }
        num = sum;
        sum = 0;
    }
    return num;
};


/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    return (num - 1) % 9 + 1;
};