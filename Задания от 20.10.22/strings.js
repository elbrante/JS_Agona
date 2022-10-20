//Первое задание
function makeOneLetterUpper(string) {
    let stringArray = string.split(' ');
    let firstUpperLetterWords = '';
    for (let wordNumber in stringArray) {
        firstUpperLetterWords += stringArray[wordNumber][0].toUpperCase() + stringArray[wordNumber].slice(1) + ' '
    }
    return firstUpperLetterWords;
}
//Второе задание
function clearString(string) {
    return str.split(/[^a-z0-9а-я]/i).join('')
}

//Третье задание
let str = 'Anna'
function checkForPalindrome(stringPalindrome) {
    return stringPalindrome.split('').reverse().join('').toLowerCase() === stringPalindrome.toLowerCase()
}

//Четвертое задание
function checkUniqueSymbol(string) {
    let arrayString = string.split('')
    const countItems = arrayString.reduce((elem, item) => {
        elem[item] = elem[item] ? elem[item] + 1 : 1;
        return elem;
    }, {});
    const result = Object.keys(countItems).filter((item) => countItems[item] < 2);
    return result.join('')
}
//Пятое задание
function replaceAll(find, replace, str) {
    let arrayStr = str.split(find)
    return arrayStr.join(replace)
}

