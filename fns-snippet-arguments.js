// function using the arguments object rather than named parameters
// useful when you dont know the exact length of parameters needed
function display() {
    var i = 0,
        len = arguments.length;
    while (i < len) {
        console.log(arguments[i]);
        i++
    }
}
display(34, 12, 3, 4, 5, 56);

console.log('\nSums...\n');

function sum() {
    var result = 0,
        i = 0,
        len = arguments.length;
    while (i < len) {
        result += arguments[i];
        i++;
    }
    return result;
}
console.log(sum(56, 23, 14));
console.log(sum(3, 4, 5, 6));
console.log(sum(50));
console.log(sum());