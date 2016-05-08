/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    var i = 0;
    var j = s.length - 1;
    var vowels = 'aeiouAEIOU';
    var arr = s.split('');
    while (i < j) {
        while (i < j) {
            if (vowels.indexOf(arr[j]) > -1) {
                break;
            } else {
                j--;
            }
        }
        while (i < j) {
            if (vowels.indexOf(arr[i]) > -1) {
                break;
            } else {
                i++;
            }
        }
        if (i < j) {
            var temp = arr[j];
            arr[j] = arr[i];
            arr[i] = temp;
            j--;
            i++;
        }
    }
    return arr.join('');
};