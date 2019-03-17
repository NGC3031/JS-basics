// basic function parameters
// Javascript using multiple parameters

var sum = function () {
    var i, total = 0;
    //get the total of the arguments
    for (i = 0; i < arguments.length; i += 1) {
        total += arguments[i];
    }
    return total;
};
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9));