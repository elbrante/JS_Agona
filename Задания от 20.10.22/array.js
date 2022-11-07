//Задание 1
function clearArrayFromDuplicate(array) {
    return Array.from(new Set(array));
}
//Задание 2
function sumElemArray(array) {
    let sumElem = 0;
    for (let elem of array) {
        sumElem += elem
    }
    return sumElem
}
//Задание 3
function findIntersect(arrOne, arrTwo) {
    return arrOne.filter(x => arrTwo.includes(x))
}


//Задание 4
function compareNumbers(a, b) {
    return a - b;
}

function binarySearch(value, list) {
    let first = 0;
    let last = list.length - 1;
    let position = -1;
    let found = false;
    let middle;

    function compareNumbers(a, b) {
        return a - b;
    }

    let sortList = list.sort(compareNumbers)
    while (found === false && first <= last) {
        middle = Math.floor((first + last)/2);
        if (sortList[middle] == value) {
            found = true;
            position = middle;
        } else if (sortList[middle] > value) {
            last = middle - 1;
        } else {
            first = middle + 1;
        }
    }
    return position;
}

//Задание 5
const merge = (arrFirst, arrSecond) => {
    const arrSort = [];
    let j;
    let i = j = 0;
    while (i < arrFirst.length && j < arrSecond.length) {
        arrSort.push(
            (arrFirst[i] < arrSecond[j]) ?
                arrFirst[i++] : arrSecond[j++]
        );
    }
    return [
        ...arrSort,
        ...arrFirst.slice(i),
        ...arrSecond.slice(j)
    ];
};

const mergeSort = arr => {
    if (!arr || !arr.length) {
        return null;
    }
    if (arr.length <= 1) {
        return arr;
    }
    const middle = Math.floor(arr.length / 2);
    const arrLeft = arr.slice(0, middle);
    const arrRight = arr.slice(middle);
    return merge(mergeSort(arrLeft), mergeSort(arrRight));
};

class User {

    constructor(name) {
        // вызывает сеттер
        this.name = name;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        if (value.length < 4) {
            console.log("Имя слишком короткое.");
            return;
        }
        this._name = value;
    }

}

let user = new User("Иван");
console.log(user.name); // Иван

user = new User(""); // Имя слишком короткое.







