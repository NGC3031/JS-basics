//Simple JS Object with constuctor
function Fish(type) {
    this.type = type;
}

Fish.prototype.col = function (shade) {
    console.log(`The ${this.type}fish looks ${shade}.`);
};

Fish.prototype.length = 25;

var swordFish = new Fish('Sword');
swordFish.length = 260;

console.log(swordFish.length);
swordFish.col('silver');