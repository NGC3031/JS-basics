// For...in loops
// For for objects, can use on arrays but not the best way to do things

var a = ['terran', 'klingon', 'vulcan', 'romulan'];
var result = '\n';
for (var i in a) {
    result += i + ' Species: ' + a[i] + '\n';
}
console.log(result);