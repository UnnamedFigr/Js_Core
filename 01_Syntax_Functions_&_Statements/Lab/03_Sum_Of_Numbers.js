
function sum(n, m)
{
    let lowerNum = parseInt(n);
    let upperNum = parseFloat(m);
    let result = 0;
    for(let i = lowerNum; i <= upperNum; i++)
    {
        result += i;
    }
    return result;
}
console.log(sum(0, 7));
