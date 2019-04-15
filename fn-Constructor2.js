//Simpler way to create an object

function Dog(name) {
    this.name = name;
    this.greeting = function () {
        console.log('Woof! I am ' + this.name);
    }
}

var lassie = new Dog('Lassie');
lassie.greeting();

//create another dog
var benji = new Dog('Benji');
benji.greeting();