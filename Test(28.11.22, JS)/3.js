function zeroAtEnd(array) {
    let index = array.length - 1;
    while (index > 0 && array[index] === 0) index -= 1;

    for (let i = 0; i < index; i++) {
        if (array[i] === 0) {
            [array[i], array[index]] = [array[index], array[i]];
            while (index > 0 && array[index] === 0) index -= 1;
        }
    }
}
