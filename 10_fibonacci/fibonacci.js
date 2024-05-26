const fibonacci = function(num) {

    let newNum = parseInt(num);

    if (newNum < 0) return "OOPS";
    if (newNum === 0) return 0;

    let firstPrev = 1;
    let secondPrev = 0;

    for (let i = 2; i <= newNum; i++) {
        let currentNumber = firstPrev + secondPrev;
        secondPrev = firstPrev;
        firstPrev = currentNumber;
    }

    return firstPrev;
};

// Do not edit below this line
module.exports = fibonacci;
