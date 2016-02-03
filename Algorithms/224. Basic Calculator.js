/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
    var pos = 0;
    var stack = [];
    var oper = [];
    var brackets = [];
    for (var i = 0; i < s.length; i++) {
        switch (s[i]) {
            case '(':
                brackets.push(i);
                break;
            case ')':
                var index = brackets.pop();
                if (brackets.length === 0) {
                    stack.push(calculate(s.slice(index + 1, i).trim()));
                    pos = i + 1;
                }
                break;
            case '+':
                if (brackets.length === 0) {
                    oper.push('+');
                    if (s.slice(pos, i).trim()) {
                        stack.push(parseInt(s.slice(pos, i).trim()));
                    }
                    pos = i + 1;
                }
                break;
            case '-':
                if (brackets.length === 0) {
                    oper.push('-');
                    if (s.slice(pos, i).trim()) {
                        stack.push(parseInt(s.slice(pos, i).trim()));
                    }
                    pos = i + 1;
                }
                break;
        }
        if (i === s.length - 1 && s.slice(pos, i + 1).trim()) {
            stack.push(parseInt(s.slice(pos, i + 1).trim()));
        }
        if (stack.length > 1) {
            var num2 = stack.pop();
            var num1 = stack.pop();
            var o = oper.shift();
            if (o === '+') {
                stack.push(num1 + num2);
            } else {
                stack.push(num1 - num2);
            }
        }
    }
    return stack[0];
};