/**
 * 
 * @param {Array} arr 
 * @param {Number} accumulator 
 */
function proccessArray(arr)
{
    const len = arr.length;
    const sum = (arr) => {
        let result = 0;
        arr.forEach(num => result += num);
        return result;
    }
    console.log(sum(arr));
    const invertedSum = (arr) => {
        let result = 0;
        arr.forEach(num => result += 1 / num);
        return result;
    }
    console.log(invertedSum(arr));
    const concatenateSum = (arr) => 
    {
        let res = '';
        arr.forEach(num => res += num);
        return res;
    }
    console.log(concatenateSum(arr));
}
let numArr = [1, 3, 5];
proccessArray(numArr);