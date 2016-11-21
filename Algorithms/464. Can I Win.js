/**
 * @param {number} maxChoosableInteger
 * @param {number} desiredTotal
 * @return {boolean}
 */
var canIWin = function (maxChoosableInteger, desiredTotal) {
    if (desiredTotal === 0) {
        return true;
    }

    if ((1 + maxChoosableInteger) * maxChoosableInteger / 2 < desiredTotal) {
        return false;
    }

    var choosenNumberSeq = 0;
    var winState = [];

    var canIWinSum = function (maxChoosableInteger, desiredTotal, sumNow) {
        if (typeof winState[choosenNumberSeq] === 'boolean') {
            return winState[choosenNumberSeq];
        }
        if (sumNow >= desiredTotal) { // 在choosenNumberSeq下，对方输了
            winState[choosenNumberSeq] = false;
            return false;
        }
        for (var i = 1; i <= maxChoosableInteger; i++) {
            var bit = 1 << (i - 1);
            if ((bit & choosenNumberSeq) === 0) {
                choosenNumberSeq ^= bit;
                var ulose = !canIWinSum(maxChoosableInteger, desiredTotal, sumNow + i);
                choosenNumberSeq ^= bit;

                if (ulose) {
                    winState[choosenNumberSeq] = true;
                    return true;
                }
            } 
        }
        winState[choosenNumberSeq] = false;
        return false;
    };
    return canIWinSum(maxChoosableInteger, desiredTotal, 0);
};