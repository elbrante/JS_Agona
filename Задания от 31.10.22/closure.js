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
        arrayNumber.forEach((value, index, array) => {
            if (rand === array[index]) {
                return;
            }
        })
        arrayNumber.push(rand);
        return rand;
    }
}

//4
const arr4 = [10, 12, 15, 21];
for (var i = 0; i < arr4.length; i++) {
    setTimeout(function() {
        console.log('Index: ' + i + ', element: ' + arr4[i]);
    }, 3000);
}



//5.1(вместо var i = 0 пишем let i = 0)
const arr = [10, 12, 15, 21];

for (let i = 0; i < arr.length; i++) {
    setTimeout(function() {
        console.log('Index: ' + i + ', element: ' + arr[i]);
    }, 3000);
}

//5.2 или сделать локальное замыкание
for (var i = 0; i < arr.length; i++) {
    (function (index) {
        setTimeout(function () {
            console.log('Index: ' + index + ', element: ' + arr[index]);
        }, 3000);
    }(i));
}
