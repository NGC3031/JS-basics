// cool iterator snippet 

function iterator(x) {
    var i = 0;
    return function () {
        return x[i++];
    };
}

var next = iterator(['bob', 'joe', 'bill'])

console.log(next());
console.log(next());