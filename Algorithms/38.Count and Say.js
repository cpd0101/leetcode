/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    function nextString(str) {
        var s = '';
        var arr = [];
        arr.push(str[0]);
        var count = 1;
        for (var i = 1; i < str.length; i++) {
            if (arr[0] === str[i]){
                count++;
            } else {
                s = s + count + arr[0];
                arr = [];
                arr.push(str[i]);
                count = 1;
            }
        }
        s = s + count + arr[0];
        return s;
    }
    var str = '1';
    while (--n) {
        str = nextString(str);
    }
    return str;
};