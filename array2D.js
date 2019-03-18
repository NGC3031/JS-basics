// 2D Array but in theory given the memory and time greater than the universe
// you can make n oo dimensional arrays to your hearts content

var row = [];
var cols = [1, 2, 3];

// fill it up
for (var i = 0; i < 10; i++) {
    row[i] = cols;
}

//print one cell
console.log(row[2][2])

//dump the lot
for (var i = 0; i < 10; i++) {
    for (var j = 0; j < 2; j++) { // col 1 to 3
        console.log(row[i][j]);
    }
}