/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    var stack = [];
    for (var i = 0; i < tokens.length; i++) {
        switch (tokens[i]) {
            case '+':
                var num2 = stack.pop();
                var num1 = stack.pop();
                stack.push(num1 + num2);
                break;
            case '-':
                var num2 = stack.pop();
                var num1 = stack.pop();
                stack.push(num1 - num2);
                break;
            case '*':
                var num2 = stack.pop();
                var num1 = stack.pop();
                stack.push(num1 * num2);
                break;
            case '/':
                var num2 = stack.pop();
                var num1 = stack.pop();
                stack.push(parseInt(num1 / num2));
                break;
            default:
                stack.push(parseInt(tokens[i]));
                break;
        }
    }
    return stack.pop();
};