//displays unicode 12.0 characters 137993

var arr = [];

for (var i = 0; i <= 137993; i++) {
    arr.push(String.fromCharCode(i));
    //console.log(String.fromCharCode(i));
}

console.log(arr.toString());