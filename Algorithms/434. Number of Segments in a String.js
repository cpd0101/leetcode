/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    s = s.trim();
    return s ? s.split(/\s+/).length : 0;
};