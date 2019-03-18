//Ternary if operator

//standard way
var pet = 'cat';
var result = '';
if (pet == 'cat') {
    console.log('meow');
} else {
    console.log('woof');
}

//way to make your code unreadable to colleagues
var result = (pet === 'cat') ? 'meow' : 'woof';
console.log(result);

//way to completely trash a codebase - have fun
var result = pet === 'cat' ? pet.length == 3 ? 'mmeow' : 'meooow' : 'meeeeowwww';