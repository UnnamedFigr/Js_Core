function findArea(input)
{
    if(typeof(input) === 'number')
    {
        return Math.PI * Math.pow(input, 2);
    }
    else
    {
        console.log('The input is not a number {' + input + '} of type: ' + typeof(input));
        return;
    }
}
console.log(findArea('5.34'));