function addNumbers(number1, number2){
  console.log(number1+number2);
}

addNumbers(2,3);
addNumbers(122,17);
addNumbers('apple','cheeseburger');

function printPurple(message){
  console.log('%c' + message, 'color:purple'); // display message in purple)
}

printPurple("Hello World!");
printPurple("I do not like hamburgers");

function printColor(text,shade){
  console.log('%c'+text, 'color:'+shade);

}

printColor('Paris is in France','orange');
printColor('Ziggy Stardust is a great song','red');
printColor('George should not have create more Star Wars movies','pink');

function addOne(number){
  return number + 1;
}

function subtractOne(number){
  return number - 1;
}

var someNumber = 23;
if(someNumber = subtractOne(addOne(someNumber))) {
  console.log('Everything works!');
}

var customer = {
  firstName: 'Bill',
  lastName:'Gates',
  displayFullName: function(){
    return this.firstName+" "+this.lastName;
  }
};

console.log(customer.firstName);
console.log(customer.lastName);
var fullName = customer.displayFullName();
console.log(fullName);

var bankAccount = {
  checking: 500.23,
  savings: 200.00,
  transfer: function(amount){
    var transfered=this.checking-amount;
    this.checking=transfered;
    return this.savings += amount;
  }
};

var fruit = [
       'Apple',
       'Banana',
       'Peach',
       'Pear',
       'Kiwi',
       'Orange',
       'Lemon',
       'Apricot',
       'Strawberry',
       'Blueberry'
     ];
for (var i=0;i<fruit.length;i++) {
  console.log(fruit[i]);
  }

// lab 2
var products = [
  {name: 'Tesla', price:40000},
  {name: 'Milk', price:1.99},
  {name: 'Oranges', price:3.44}
     ];

var sum = 0;

for (var i = 0; i <products.length; i++) {
       sum += products[i].price;
  }

console.log(sum);

var movies = [
     'King Kong',
     'Independence Day',
     'Star Wars',
     'The Godfather'
   ];

for (var i=0;i<movies.length;i++) {
  if (movies[i].length<10) {
    movies.splice(i,1);
  }
}

console.log(movies);

var animals = [
    'fish', 'lion', 'tapir', 'cheetah'
];

for (var i=0;i<animals.length;i++) {
  console.log(animals[i]);
}

for (var key in animals) {
  console.log(animals[key]);
}

var i = 0;
while (i < animals.length) {
  console.log(animals[i]);
  i++;
}

var i = 0;
do {
  console.log(animals[i]);
  i++;
}  while (i < animals.length)


var moviequotes =[
  'Frankly my dear,I don\'t give a damn.',
  'E.T. phone home!',
  'Show me the money!'
]

var randomQuote = moviequotes[Math.floor(Math.random()*moviequotes.length)];

console.log(randomQuote);

var weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

var myBirthdayday = new Date('08/01/1974');
console.log('I was born on a ' + weekDays[myBirthdayday.getDay()]);

var signs =[
  'Capricorn',
  'Aquarius',
  'Pisces',
  'Aries',
  'Taurus',
  'Gemini',
  'Cancer',
  'Leo',
  'Virgo',
  'Libra',
  'Scorpio',
  'Sagittarius'
]

var bday = prompt("Enter the date of your birthday to get your sign! Format: mm/dd/yyyy");

bday= new Date(bday);

var month = bday.getMonth();

var day = bday.getDate();
/*
0 Capricorn: Dec. 22 - Jan. 19
1 Aquarius: Jan. 20 - Feb. 18
2 Pisces: Feb. 19 - March 20
3 Aries: March 21 - April 19
4 Taurus: April 20 - May 20
5 Gemini: May 21 - June 20
6 Cancer: June 21 - July 22
7 Leo: July 23 - August 22
8 Virgo: August 23 - Sept. 22
9 Libra: Sept. 23 - October 22
10 Scorpio: October 23 - Nov. 21
11 Sagittarius: Nov. 22 - Dec. 21
*/

if ((month == 11 && day >=22)||(month == 0 && day <=19)) {
  alert(signs[0]);
} else if ((month == 0 && day <=18)||(month == 1 && day >=18)) {
  alert(signs[1]);
} else if ((month == 1 && day >=19)||(month == 2 && day <=20)) {
  alert(signs[2]);
} else if ((month == 2 && day >=21)||(month == 3 && day <=19)) {
  alert(signs[3]);
} else if ((month == 3 && day >=20)||(month == 4 && day <=20)) {
  alert(signs[4]);
} else if ((month == 4 && day >=21)||(month == 5 && day <=20)) {
  alert(signs[5]);
} else if ((month == 5 && day >=21)||(month == 6 && day <=22)) {
  alert(signs[6]);
} else if ((month == 6 && day >=23)||(month == 7 && day <=22)) {
  alert(signs[7]);
} else if ((month == 7 && day >=23)||(month == 8 && day <=22)) {
  alert(signs[8]);
} else if ((month == 8 && day >=23)||(month == 9 && day <=22)) {
  alert(signs[9]);
} else if ((month == 9 && day >=23)||(month == 10 && day <=21)) {
  alert(signs[10]);
} else if ((month == 10 && day >=22)||(month == 11 && day <=21)) {
  alert(signs[11]);
} else{
  alert(Error!);
}
