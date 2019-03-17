// Javascript hoisting demonstration

a = 2; //we can assign 2 to a
console.log(a);

var a; // declaration is moved to the top by the interpreter before execution


me();

// the function me is moved up also even though it is declared after the call
// compare that to say c/c++
function me() {
    console.log('Hello me');
}

//function expressions are not hoisted

//functionHoist(); //this will generate 'Not a function error'

var functionHoist = function () {
    console.log("functionHoist");
};

functionHoist(); // works fine