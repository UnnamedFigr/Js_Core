/**
 * 
 * @param {String} text 
 */
function wordUppercase(text)
{
    let uppercaseText = text.toUpperCase();
    let wordArray = extractWords();
    function extractWords()
    {
        return text.split(/\W+/);
    }
    return wordArray.join(', ');
}
let inputText = 'This is a test text, nothing else.';
console.log(wordUppercase(inputText));