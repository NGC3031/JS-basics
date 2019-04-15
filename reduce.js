// Example of reduce

var numbers = [2, 4, 3, 5, 6, 7, 8, 9];

function operation(accumulator, final) {
    return accumulator + final;
}

console.log(numbers.reduce(operation));