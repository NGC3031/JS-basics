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
//essentially fn outside is dead - but lives on because it sent back fn inside
//wooo closure
console.log(outside());