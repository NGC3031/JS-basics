// Simulating overloading
// Javascript functions can accept any number of parameters through the
// arguments object which also means they have no function signatures
// Work arounds for function overloading. Checking against undefined is
// more standard.

function simOverload(msg) {
    if (arguments.length === 0) {
        msg = 'Default';
    }
    if (arguments.length === 1) {
        msg = 'One cat.';
    }
    if (arguments.length === 2) {
        msg = 'And lots of mice.';
    }
    if (arguments.length === 3) {
        msg = 'And four Owls';
    }
    return console.log(msg);
}
simOverload();
simOverload(1);
simOverload(1, 2);
simOverload(1, 2, 3);