//function adder - a function factory creating functions
// closure

function makeAdder(x) {
    return function (y) {
        return x + y;
    };
}
// add5 = function(y) {return 5+y;}
var add5 = makeAdder(5);
var add10 = makeAdder(10);
//add5(2)=function(2){return 5+2;}  =7
console.log(add5(2)); // 7
console.log(add10(2)); // 12