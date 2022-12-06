//Задание 1
function makeOneLetterUpper(string) {
    let stringArray = string.split(' ');
    let firstUpperLetterWords = '';
    for (let wordNumber in stringArray) {
        firstUpperLetterWords += stringArray[wordNumber][0].toUpperCase() + stringArray[wordNumber].slice(1) + ' '
    }
    return firstUpperLetterWords;
}


//Задание 2 - исправленное
function clear(string) {
    let symbolOfString = symbol => {
        const unicodeOfSymbol = symbol.charCodeAt(0);
        return !(unicodeOfSymbol < 48 ||
            (unicodeOfSymbol > 57 && unicodeOfSymbol < 65) ||
            (unicodeOfSymbol > 90 && unicodeOfSymbol < 97) ||
            (unicodeOfSymbol > 122 && unicodeOfSymbol < 128))
    }

    return string
        .split('')
        .filter(symbolOfString)
        .join('');
}

//Задание 2 - неправильное
function clearString(string) {
    return str.split(/[^a-z0-9а-я]/i).join('')
}



//Задание 3
let str = 'Anna'
function checkForPalindrome(stringPalindrome) {
    return stringPalindrome.split('').reverse().join('').toLowerCase() === stringPalindrome.toLowerCase()
}

//Задание 4
function checkUniqueSymbol(string) {
    let arrayString = string.split('')
    const countItems = arrayString.reduce((elem, item) => {
        elem[item] = elem[item] ? elem[item] + 1 : 1;
        return elem;
    }, {});
    const result = Object.keys(countItems).filter((item) => countItems[item] < 2);
    return result.join('')
}

//Задание 5
function replaceAll(find, replace, str) {
    let arrayStr = str.split(find)
    return arrayStr.join(replace)
}

