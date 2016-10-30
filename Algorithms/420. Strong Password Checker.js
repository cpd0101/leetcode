/**
 * @param {string} s
 * @return {number}
 */
var strongPasswordChecker = function (s) {
    var ans = 0;
    var len = s.length;
    var typeCnt = 0;
    if ((/[0-9]/g).test(s)) {
        typeCnt++;
    }
    if ((/[a-z]/g).test(s)) {
        typeCnt++;
    }
    if ((/[A-Z]/g).test(s)) {
        typeCnt++;
    }
    var repeats = [];
    var pre = '';
    var cnt = 0;
    for (var i = 0; i <= s.length; i++) {
        if (s[i] === pre) {
            cnt++;
        } else {
            if (cnt >= 3) {
                repeats.push(cnt);
            }
            cnt = 1;
        }
        pre = s[i];
    }
    if (len < 6) {
        if (repeats.length && repeats[0] === 5) {
            return Math.max(2, 3 - typeCnt);
        }
        return Math.max(6 - len, 3 - typeCnt);
    }
    var deleteCnt = Math.max(len - 20, 0);
    ans += deleteCnt;
    if (deleteCnt > 0 && repeats.length) {
        for (var i = 0; i < repeats.length && deleteCnt > 0;) {
            if (repeats[i] % 3 === 0) {
                deleteCnt -= 1;
                repeats[i] -= 1;
            }
            if (repeats[i] < 3) {
                repeats.splice(i, 1);
            } else {
                i++;
            }
        }
        for (var i = 0; i < repeats.length && deleteCnt > 0;) {
            if (repeats[i] % 3 === 1) {
                deleteCnt -= 2;
                repeats[i] -= 2;
            }
            if (deleteCnt < 0) {
                repeats[i] -= deleteCnt;
            }
            if (repeats[i] < 3) {
                repeats.splice(i, 1);
            } else {
                i++;
            }
        }
    }
    while (deleteCnt > 0 && repeats.length) {
        for (var i = 0; i < repeats.length && deleteCnt > 0;) {
            if (repeats[i] % 3 === 2) {
                deleteCnt -= 3;
                repeats[i] -= 3;
            }
            if (deleteCnt < 0) {
                repeats[i] -= deleteCnt;
            }
            if (repeats[i] < 3) {
                repeats.splice(i, 1);
            } else {
                i++;
            }
        }
    }
    var changeCnt = 0;
    for (var i = 0; i < repeats.length; i++) {
        changeCnt += Math.floor(repeats[i] / 3);
    }
    ans += Math.max(changeCnt, 3 - typeCnt);
    return ans;
};