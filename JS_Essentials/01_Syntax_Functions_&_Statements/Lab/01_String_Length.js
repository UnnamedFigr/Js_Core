
function outputLength(str1, str2, str3)
{
    let totalLength = 0;

    totalLength = str1.length + str2.length + str3.length;
    averageLength = Math.floor(totalLength / 3);

    console.log("The total length of the characters is: " + totalLength + "\nAnd the average length is: " + averageLength);
}
outputLength('martines', 'chocolate', '53.54');