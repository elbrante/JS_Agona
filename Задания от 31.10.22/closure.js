// 1
function countCalls() {
    let count = 0;

    return function() {
        return ++count
    }
}

//2
function sum(x) {
    return function (y) {
        return function (z) {
            return x + y + z
        }
    }
}


//3
function randomInteger() {
    let arrayNumber = []
    return function () {
        if (arrayNumber.length === 100) {
            return;
        }
        let rand = Math.floor(1 + (Math.random() * 100));
        for (let i = 0; i < arrayNumber.length; i++) {
            if (rand === arrayNumber[i]) {
                return;
            }
        }
        arrayNumber.push(rand);
        return rand;
    }
}


