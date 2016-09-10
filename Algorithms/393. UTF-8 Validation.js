/**
 * @param {number[]} data
 * @return {boolean}
 */
var validUtf8 = function (data) {
    var byte1Max = parseInt('01111111', 2);
    var byte1Min = parseInt('00000000', 2);
    var byte0Max = parseInt('10111111', 2);
    var byte0Min = parseInt('10000000', 2);
    var byte2Max = parseInt('11011111', 2);
    var byte2Min = parseInt('11000000', 2);
    var byte3Max = parseInt('11101111', 2);
    var byte3Min = parseInt('11100000', 2);
    var byte4Max = parseInt('11110111', 2);
    var byte4Min = parseInt('11110000', 2);
    var between = function (v, min, max) {
        return v >= min && v <= max;
    };
    for (var i = 0; i < data.length;) {
        var v = data[i];
        if (between(v, byte1Min, byte1Max)) {
            i += 1;
        } else if (between(v, byte2Min, byte2Max)) {
            i += 2;
            if (i > data.length) {
                return false;
            }
            if (!between(data[i - 1], byte0Min, byte0Max)) {
                return false;
            }
        } else if (between(v, byte3Min, byte3Max)) {
            i += 3;
            if (i > data.length) {
                return false;
            }
            if (!between(data[i - 1], byte0Min, byte0Max) || !between(data[i - 2], byte0Min, byte0Max)) {
                return false;
            }
        } else if (between(v, byte4Min, byte4Max)) {
            i += 4;
            if (i > data.length) {
                return false;
            }
            if (!between(data[i - 1], byte0Min, byte0Max) || !between(data[i - 2], byte0Min, byte0Max) || !between(data[i - 3], byte0Min, byte0Max)) {
                return false;
            }
        } else {
            return false;
        }
    }
    return true;
};