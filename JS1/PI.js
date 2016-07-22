function Character(name, health) {
  this.name = name;
  this.health = health;
  this.sayHello = function() {
    console.log(this.name);
  }
}

function Knight(name, strength, health) {
  this.strength = strength;
  Character.call(this, name, health);
}

Knight.prototype = new Character();

function Mage(name, magic, health) {
  this.magic = magic;
  Character.call(this, name, health);
}

Mage.prototype = new Character();

var knight1= new Knight('Sir BraveHeart', '8', '7');
var mage1 = new Mage('Magic Man', '7','9');

console.log(knight1);
console.log(mage1);
