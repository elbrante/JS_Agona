banknotes = [50, 100, 200, 500, 1000]
function getBanknotes(money) {
    let res = 0
    for (let i = 0; i < 5; i++) {
        res += money / banknotes[i]
        money = money % banknotes[i]
    }
    if (res > 0) {
        console.log(-1)
    } else {
        console.log(res)
    }
}