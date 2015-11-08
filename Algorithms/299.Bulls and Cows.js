/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
    var a = 0;
    var b = 0;
    var arrA = new Array(10);
    var arrB = new Array(10);
    for (var i = 0; i < secret.length; i++) {
        if (arrA[secret[i]]) {
            arrA[secret[i]]++;
        } else {
            arrA[secret[i]] = 1;
        }

        if (arrB[guess[i]]) {
            arrB[guess[i]]++;
        } else {
            arrB[guess[i]] = 1;
        }

        if (secret[i] === guess[i]) {
            a++;
        }
    }

    for (i = 0; i < 10; i++) {
        if (arrA[i] && arrB[i]) {
            b += Math.min(arrA[i], arrB[i]);
        }
    }

    return a + 'A' + (b - a) + 'B';
};