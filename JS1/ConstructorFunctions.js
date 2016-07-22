function Customer(firstName,lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.displayFullname = function() {
    return this.firstName + " " + this.lastName;
  }
}

var customer1 = new Customer('Bill','Gates');
var customer2 = new Customer('Steve','Jobs');
var customer3 = new Customer('Larry','Page');

console.log(customer1);
console.log(customer2);
console.log(customer3);

function Animal(name,sound) {
  this.name = name;
  this.sound = sound;
  this.makeSound = function() {
    console.log(this.name + ' I go '+ this.sound);
  }
}
var animal1= new Animal('dog','bark');
var animal2= new Animal('cat', 'meow');
var animal3= new Animal('pig', 'oink');

console.log (animal1);
console.log (animal2);
console.log (animal3);
