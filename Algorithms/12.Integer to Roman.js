/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    var ret = '';
    while (num) {
        var c = 0;
        if (num >= 900) {
            c = parseInt(num / 1000);
            num = num % 1000;
            while (c) {
                ret += 'M';
                c--;
            }
            if (num + 100 >= 1000) {
                ret += 'CM';
                num = num % 100;
            }
        } else if (num >= 400) {
            c = parseInt(num / 500);
            num = num % 500;
            while (c) {
                ret += 'D';
                c--;
            }
            if (num + 100 >= 500) {
                ret += 'CD';
                num = num % 100;
            }
        } else if (num >= 90) {
            c = parseInt(num / 100);
            num = num % 100;
            while (c) {
                ret += 'C';
                c--;
            }
            if (num + 10 >= 100) {
                ret += 'XC';
                num = num % 10;
            }
        } else if (num >= 40) {
            c = parseInt(num / 50);
            num = num % 50;
            while (c) {
                ret += 'L';
                c--;
            }
            if (num + 10 >= 50) {
                ret += 'XL';
                num = num % 10;
            }
        } else if (num >= 9) {
            c = parseInt(num / 10);
            num = num % 10;
            while (c) {
                ret += 'X';
                c--;
            }
            if (num + 1 >= 10) {
                ret += 'IX';
                num = 0;
            }
        } else if (num >= 4) {
            c = parseInt(num / 5);
            num = num % 5;
            while (c) {
                ret += 'V';
                c--;
            }
            if (num + 1 >= 5) {
                ret += 'IV';
                num = 0;
            }
        } else {
            while (num) {
                ret += 'I';
                num--;
            }
        }
    }
    return ret;
};