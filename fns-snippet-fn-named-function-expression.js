// Javascript using a function as data

//Normal person way
var chat = console.log;
chat("Howdy");

//or more standard
chat = function () {
    console.log("Howdy");
};
chat();

//or function literal which create a function object
chat = function () {
    this.msg = 'Howdy';
    return this.msg;
};
console.log(chat());

//Really weird but can be done just to test the tech lead before you get fired
chat = function biteMe() {
    this.msg = 'err Howdy';
    return this.msg;
};
console.log(chat());
//May or not work - used to work in explorer because you created two variables now
//console.log(biteMe());