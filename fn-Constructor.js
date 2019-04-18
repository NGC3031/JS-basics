function createNewDog(name) {
    var obj = {};
    obj.name = name;
    obj.greeting = function () {
        console.log('Woof! I am ' + obj.name);
    }
    return obj;
}

var lassie = createNewDog('Lassie');
lassie.greeting();