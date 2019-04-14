// Simple example of filter

function isEven(a) {
    if ((a % 2) < 1) {
        return a;
    }
}

var arr = [2, 3, 4, 5, 6, 7];

console.log(arr.filter(isEven));