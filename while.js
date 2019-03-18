// while loops of two flavors

var i = 1;
while (i < 1) {
    console.log(i);
    i++;
}
// do while executes at least once since the loop has to execute before the condition is tested
console.log('this executes anyway');
// even though i is 1 and the condition is i<1 
i = 1;
do {
    console.log(i);
    i++;
} while (i < 1);