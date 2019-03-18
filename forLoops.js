//for loops

//simple
for (var i = 0; i < 5; i++) {
    console.log(i);
}

//getting fancy
for (var i = 0, j = 0; i < 5, j < 10; i++, j++) {
    console.log(i);
    console.log(j);
}

//getting weird
for (var i = 0, writeLine = ''; i < 100; i++) {
    writeLine += 'I forgot my homework, ';
    console.log(writeLine);
}

//and how to wreck not just a codebase but your company
for (var i = 0, writeLine = ''; i < 100; i++, console.log('I forgot my homework, ')) {}