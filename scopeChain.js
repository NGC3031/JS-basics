// Scope chains

// standard functions
var global = 1;
//inner functions have access to the variables of outer functions
function outside() {
    var outsideLocal = 2;

    function inside() {
        var insideLocal = 3;
        return global + outsideLocal + insideLocal;
    }
    return inside();
}
console.log(outside());




var a = 'a';
//now using anonymous function expressions to break the scope chain
var f1 = function () {
    var b = 'b';
    var f2 = function () {
        var c = 'c';
        return b;
    }
    return f2;
}

//console.log(b); // b is not defined
f1();
console.log(f1);