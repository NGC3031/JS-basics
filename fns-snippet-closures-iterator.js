// cool iterator snippet 
// notice var i retains its value

function iterator(x) {
    var i = 0;
    return function () {
        return x[i++];
    };
}

var next = iterator(['bob', 'joe', 'bill'])

console.log(next());
console.log(next());
console.log(next());
//undefined
console.log(next());