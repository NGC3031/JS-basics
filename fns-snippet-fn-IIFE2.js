// Javascript using Immediatel Invoked Dunction Expression IIFE "iffy"
// useful to hide variables without polluting the global scope by creating lots of declared functions

//A sequence counter
var Sequence = (function sequenceIIFE() {

    // Private variable to store current counter value.
    var current = 0;

    // Object that's returned from the IIFE.
    return {
        getCurrentValue: function () {
            return current;
        },

        getNextValue: function () {
            current = current + 1;
            return current;
        },

        getPreviousValue: function () {
            current = current - 1;
            return current;
        }
    };

}());

console.log(Sequence.getNextValue()); // 1
console.log(Sequence.getNextValue()); // 2
console.log(Sequence.getCurrentValue()); // 2
console.log(Sequence.getPreviousValue()); // 1