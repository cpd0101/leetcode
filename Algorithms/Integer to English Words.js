/**
 * @param {number} num
 * @return {string}
 */
var map = {};
    map[0] = '';
    map[1] = 'One ';
    map[2] = 'Two ';
    map[3] = 'Three ';
    map[4] = 'Four ';
    map[5] = 'Five ';
    map[6] = 'Six ';
    map[7] = 'Seven ';
    map[8] = 'Eight ';
    map[9] = 'Nine ';
    map[10] = 'Ten ';
    map[11] = 'Eleven';
    map[12] = 'Twelve';
    map[13] = 'Thirteen';
    map[14] = 'Fourteen';
    map[15] = 'Fifteen';
    map[16] = 'Sixteen';
    map[17] = 'Seventeen';
    map[18] = 'Eighteen';
    map[19] = 'Nineteen';
    map[20] = 'Twenty ';
    map[30] = 'Thirty ';
    map[40] = 'Forty ';
    map[50] = 'Fifty ';
    map[60] = 'Sixty ';
    map[70] = 'Seventy ';
    map[80] = 'Eighty ';
    map[90] = 'Ninety ';
    map[100] = 'Hundred ';
    map[1000] = 'Thousand ';
    map[1000000] = 'Million ';
    map[1000000000] = 'Billion ';
var arr = [1000000000, 1000000, 1000, 100];
var numberToWords = function(num) {
    var ret = [];
    for (var i = 0; i < arr.length; i++) {
        var c = 0;
        if (num >= arr[i]) {
            c = parseInt(num / arr[i]);
            ret += numberToWords(c) + ' ' + map[arr[i]];
            num = num % arr[i];
        }
    }
    for (i = 9; i > 1; i--) {
        if (num >= i * 10) {
            ret += map[i * 10];
            num = num % 10;
            break;
        }
    }
    ret += map[num];
    if (ret === '') ret = 'Zero';
    return ret.trim();
};