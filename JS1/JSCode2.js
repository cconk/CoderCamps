/*
var username = prompt("Enter your full name:");

var index = (username.indexOf(" "));

console.log(username.slice(0,index)); //display firstname

console.log(username.slice(index+1,100)); //display lastname


dashing through the snow
in a one horse open sleigh
over the fields we go
laughing all the way
*/

var paragraph = 'dashing through the snow '
  + 'in a one horse open sleigh '
  + 'over the fields we go '
  + 'laughing all the way';


var words = paragraph.split(' ');

console.log(words.length);

var randomStart = Math.random();

console.log(randomStart);

console.log(words);


var phone = /^\d{3}-\d{3}-\d{4}$/;
/*
var userPhone = prompt('What is your phone number? Format: xxx-xxx-xxxx');

if (phone.test(userPhone)){
  console.log("Valid number!");
} else{
  alert("Bad Number!");
}
*/

var numbers = /\d+/g;

var entry = prompt('Enter string with numbers');

var count = entry.match(numbers);

console.log(count.length);
