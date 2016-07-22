/* var now = new Date();
var currentHour = now.getHours();
if(currentHour > 17) {
  alert("Time to go Home!");
} else{
  alert("Get back to work!");
}
*/

var randomNumber=Math.floor(Math.random()*3);

switch (randomNumber) {
  case 1:
    alert("You will amass great fortune and power.");
  case 2:
    alert("You'll be eaten by a bear.");
  break;
  default:
    alert("You will win the lottery.");
}
