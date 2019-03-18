//ternary if operator

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