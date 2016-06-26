/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function (words, maxWidth) {
    var res = [];
    if (words.length === 0) {
        return res;
    }
    var genSpace = function (n) {
        var str = '';
        while (n-- > 0) {
            str += ' ';
        }
        return str;
    };
    var line = [words[0]];
    var len = words[0].length;
    for (var i = 1; i < words.length; i++) {
        if (len + 1 + words[i].length > maxWidth) {
            if (line.length === 1) {
                res.push(line[0] + genSpace(maxWidth - len));
            } else {
                var extra = maxWidth - len;
                var s = genSpace(parseInt(extra / (line.length - 1)) + 1);
                var e = extra % (line.length - 1);
                var str = '';
                for (var j = 0; j < line.length - 1; j++) {
                    str += line[j] + s;
                    if (j < e) {
                        str += ' ';
                    }
                }
                res.push(str + line[j]);
            }
            line = [words[i]];
            len = words[i].length;
        } else {
            line.push(words[i]);
            len += 1 + words[i].length;
        }
    }

    if (line.length) {
        res.push(line.join(' ') + genSpace(maxWidth - len));
    }

    return res;
};