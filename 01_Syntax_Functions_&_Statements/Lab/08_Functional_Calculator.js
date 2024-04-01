// Immediately Invoked Function Expression (IIFE)
// The way to identify an IIFE is
// by locating the extra left and right parenthesis at the end of the function's definition
const calculator = (() => { // Here is the extra opening parenthesis
    const add = (a, b) => a + b;
    const subtract = (a, b) => a - b;
    const multiply = (a, b) => a * b;
    const divide = (a, b) => (b !== 0 ? a / b : "Cannot divide by zero");

    return (num1, num2, operator) => {
        switch (operator) {
            case '+':
                return add(num1, num2);
            case '-':
                return subtract(num1, num2);
            case '*':
                return multiply(num1, num2);
            case '/':
                return divide(num1, num2);
            default:
                return "Invalid operator";
        }
    };
})(); // Here is the closing one right after the curly bracket

console.log(calculator(53, 43, '-'));