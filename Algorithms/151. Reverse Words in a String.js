/**
 * @param {string} str
 * @returns {string}
 */
var reverseWords = function(str) {
    return str.split(/\s+/gi).reverse().join(' ').trim();
};