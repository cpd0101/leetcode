/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    citations.sort(function (a, b) {
        return a - b;
    });
    for (var i = citations.length - 1; i >= 0; i--) {
        var h = i + 1;
        if (citations[citations.length - h] >= h 
            && (citations[citations.length - h - 1] <= h 
                || citations[citations.length - h - 1] === undefined)) {
            return h;
        }
    }
    return 0;
};