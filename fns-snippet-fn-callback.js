// Javascript callback functions 

//which is basically passing a function to a function
//and I have not seen any real good explanations
//and and and as far as I know using alert in a callback demo is pointless
//alert halts everything
//so yes basically as said passing a function as a function parameter
//but what is the point? JS is asynchronous which basically means it can get out
// of wack fast. In short functions wont wait for previous calls to finish
//so callbacks bring some order back to program flow. You can execute functions
//when you want to. Not whenever every damn function feels like it.
// and yep that was probably TLDR;

//Simulating a delay means fn second finishes before one
//Javascript didnt bother to wait around to see if first had finished
function first() {
    setTimeout(function () {
        console.log(1);
    }, 500);
}

function second() {
    console.log(2);
}

//first(); uncomment these if you are working down the code
//second();

//callbacks are a way to regain some sanity so lets try again
function first1() {
    setTimeout(function () {
        console.log(1);
    }, 500);

    function second1() {
        console.log(2);
    }
}

//now the problem is second1 never gets called //1
//first1();

//attempt 3
function first2(callback) {
    setTimeout(function () {
        console.log(1);
        callback();
    }, 500);
}

//now the problem is second1 never gets called what about passing second as a parameter
//so we have have passed a function as an argument and then executed it inside the second function
first2(function second2() {
    console.log(2);
});
//this can be cleaned up by using an anonymous function
// plus it helps clean up the namespace
first2(function () {
    console.log(2);
});
console.log('\n\n'); //scrolling for you (Interestingly executed first here...)

// REAL CALLBACK HERE
//complete example with nice code
function functionOne(functionTwo) {
    setTimeout(function () {
        console.log('\n\n'); //could put it below but helps keep things clear
        console.log('one');
        functionTwo(); //callback
    }, 500);
}
functionOne(function () {
    console.log('two');
});