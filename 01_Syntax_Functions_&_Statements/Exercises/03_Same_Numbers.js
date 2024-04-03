/**
 * 
 * @param {Number} digits 
 * 
 */
function sameNumbers(digits)
{
    let = _digits = digits;
    let result = 0;
    const equalNums = (() => {
        let equal = true; 
        
        while(_digits != 0)
        {
            let digit = _digits % 10;
            result += digit;
            _digits = Math.trunc(_digits / 10);
            let temp = _digits % 10;
            if(_digits != 0 && digit != temp) {equal = false;}
        }
        return equal;
        
    })();

    return {result, equalNums};
}
console.log(sameNumbers(2222225));
console.log(sameNumbers(2222225));