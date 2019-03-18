// switch to replace a gazillion if else
// seems dumb here but pet would normally be user input etc.

var pet = 'cat';
var result = '';

switch (pet) {
    case 'cat':
        result = 'yep it is a cat';
        break;
    case 'dog':
        result = 'nope it is a dog';
        break;
    default:
        result = 'no idea what it is';
        break;
}
console.log(result);