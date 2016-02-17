/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    s = s.trim();
    var pos = 0;
    var num = [];
    var oper = [];
    for (var i = 0; i <= s.length; i++) {
        if (s[i] === '+' || s[i] === '-' || s[i] === '/' || s[i] === '*' || i === s.length) {
            num.push(parseInt(s.slice(pos, i).trim()));
            pos = i + 1;
            while (oper.length && (s[i] === '+' || s[i] === '-' || oper[oper.length - 1] === '/' || oper[oper.length - 1] === '*' || i === s.length)) {
                var tempOper = oper.pop();
                var num2 = num.pop();
                var num1 = num.pop();
                switch (tempOper) {
                    case '+':
                        num.push(num1 + num2);
                        break;
                    case '-':
                        num.push(num1 - num2);
                        break;
                    case '/':
                        num.push(parseInt(num1 / num2));
                        break;
                    case '*':
                        num.push(num1 * num2);
                        break;
                }
            }
            oper.push(s[i]);
        }
    }
    return num[0];
};