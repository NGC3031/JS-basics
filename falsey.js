//demonstration of why falsey matters when checking

//var testVar = ''; //this works but what if testVar=0 or not defined?
var testVar;
testVar = 'false';
var result = 'nope';
if (testVar) {
    result = 'yep';
}
console.log(result);

//the above code works but can be ambiguous or generate an error
//even though testVar2 is undefined the code still works
//point is sometimes you need to double check

var testVar2;
if (typeof testVar2 !== "undefined") {
    result = "yes";
} else {
    //Error stuff here
    console.log('oops');
}
console.log(result);
console.log(testVar2);