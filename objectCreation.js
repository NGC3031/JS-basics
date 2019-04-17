//using the Object Constructor
var benji = new Object({
    name: 'Benji',
    age: 5,
    greeting: function () {
        console.log('Hello I am ' + this.name);
    }
});

benji.greeting();
//Using the create method on an existing object
var lassie = Object.create(benji);
lassie.name = 'Lassie';
lassie.greeting();