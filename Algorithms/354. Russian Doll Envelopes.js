/**
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function (envelopes) {
    envelopes.sort(function (a, b) {
        if (a[0] < b[0]) {
            return -1;
        } else if (a[0] > b[0]) {
            return 1;
        } else {
            return a[1] - b[1];
        }
    });

    var arr = [];
    var mls = 0;

    for (var i = 0; i < envelopes.length; i++) {
        var max = 1;
        for (var j = 0; j < i; j++) {
            if (envelopes[j][0] < envelopes[i][0] && envelopes[j][1] < envelopes[i][1]) {
                if (max < arr[j] + 1) {
                    max = arr[j] + 1;
                }
            }
        }
        arr[i] = max;
        if (mls < max) {
            mls = max;
        }
    }

    return mls;
};