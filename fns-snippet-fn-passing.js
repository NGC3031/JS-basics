// Javascript passing function as a parameter

function double(val) {
    return val * 2;
}

function triple(val) {
    return val * 3;
}

function selectFunc(a, passfunction) {
    console.log(passfunction(a));
}

selectFunc(2, double);

selectFunc(2, triple);