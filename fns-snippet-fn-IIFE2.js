// Javascript using Immediatel Invoked Dunction Expression IIFE "iffy"
// useful to hide variables without polluting the global scope by creating lots of declared functions

var a = 1;

//declared as a function expression not a declaration
(function foo() {
    var a = 2;
    console.log(a);
})();

console.log(a);

//returning a value from an iffy function
var result = (function () {
    return "Iffy return";
}())

console.log(result);

// passing parameters to an iffy function
(function IIFE(msg, times) {
    for (var i = 1; i <= times; i++) {
        console.log(msg);
    }
}("Hello", 5));