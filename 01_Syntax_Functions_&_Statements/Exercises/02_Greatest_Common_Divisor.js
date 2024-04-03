function GCD(num1, num2)
{
    let commonDivisor = 0;
    let bound = (() => {
        return num1 > num2 ? num2 : num1;
    })();
    for(let i = 1; i <= bound; i++)
    {
        if(num1 % i === 0 && num2 % i === 0)
        {
            commonDivisor = i;
        }
        else if(num1 % num2 === 0 || num2 % num1 === 0)
        {
            commonDivisor = bound;
            return commonDivisor;
        }
    }
    return commonDivisor;
}
console.log(GCD(21, 49));