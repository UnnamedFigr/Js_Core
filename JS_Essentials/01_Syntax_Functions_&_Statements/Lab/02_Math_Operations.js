
function solve(num1, num2, operator)
{
    let result = 0;

    switch(operator)
    {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        case '**':
            result = num1 ** num2;
            break;
        default:
            break;
    }
    return result;
}
console.log(solve(5, 7.4, '+'));
console.log(solve(5, 7.4, '-'));
console.log(solve(5, 7.4, '**'));