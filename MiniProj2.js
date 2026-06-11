let number = 3;

function OddOrEvenChecker(number){
    if (number & 2 == 0){
        return "Even";
    }
    else {
        return "Odd";
    }
}

console.log(OddOrEvenChecker(number));