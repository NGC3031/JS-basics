// fJavascript recursion to compute factorial

var fact = function factorial(n) {
    if (n <= 1)
        return 1;
    return n * factorial(n - 1);
}

console.log(fact(5));