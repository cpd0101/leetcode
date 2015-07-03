/**
 * @param {number} A
 * @param {number} B
 * @param {number} C
 * @param {number} D
 * @param {number} E
 * @param {number} F
 * @param {number} G
 * @param {number} H
 * @return {number}
 */
var computeArea = function(A, B, C, D, E, F, G, H) {
    var w1 = C - A;
    var h1 = D - B;
    var w2 = G - E;
    var h2 = H - F;
    if (E >= C || F >= D || A >= G || B >= H) {
        return w1 * h1 + w2 * h2;
    } else {
        var x1;
        var x2;
        var y1;
        var y2;
        if (A < E) {
            x1 = E;
        } else {
            x1 = A;
        }
        if (G < C) {
            x2 = G;
        } else {
            x2 = C
        }
        if (B < F) {
            y1 = F;
        } else {
            y1 = B;
        }
        if (H < D) {
            y2 = H;
        } else {
            y2 = D;
        }
        var w = x2 - x1;
        var h = y2 - y1;
        return w1 * h1 + w2 * h2 - w * h;
    }
};