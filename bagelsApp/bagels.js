var btn = document.getElementById('submitGuess');
btn.addEventListener('click',checkGuess);
var numOfGuesses = 0;
var compDig1=getRandomNumber(0,10);
  //console.log(compDig1);
var compDig2=getRandomNumber(0,10);
  //console.log(compDig2);
var compDig3=getRandomNumber(0,10);
  //console.log(compDig3);

var compNum = "";
compNum = compNum.concat(compDig1,compDig2,compDig3);
  //console.log(compNum);

function getRandomNumber(min, max) {
       return Math.floor(Math.random() * (max - min)) + min;
    }

function checkGuess() {
    numOfGuesses=numOfGuesses+1;
    //console.log(numOfGuesses);
    if (numOfGuesses>=20) {
      alert("Sorry You Lost!! My number was: " + compNum);

      location.reload();
    }
  else {
    var userGuess = document.getElementById('inputUserGuess').value;
      //console.log(userGuess);
    var userGuessDig1 = userGuess.substr(0,1);
      //console.log(userGuessDig1);
    var userGuessDig2 = userGuess.substr(1,1);
      //console.log(userGuessDig2);
    var userGuessDig3 = userGuess.substr(2,1);
      //console.log(userGuessDig3);

    var dig1result = "";
    var dig2result = "";
    var dig3result = "";

    if (userGuessDig1 == compDig1) {
        dig1result="Fermi";
      }
      else if (userGuessDig1 == compDig2 || userGuessDig1 == compDig3) {
        dig1result="Pico";
      }
      else {
        dig1result = "";
      }

    if (userGuessDig2 == compDig2) {
        dig2result="Fermi";
      }
      else if (userGuessDig2 == compDig1 || userGuessDig2 == compDig3) {
        dig2result="Pico";
      }
      else {
        dig2result = "";
      }

    if (userGuessDig3 == compDig3) {
        dig3result="Fermi";
      }
      else if (userGuessDig3 == compDig2 || userGuessDig3 == compDig1) {
        dig3result="Pico";
      }
      else {
        dig3result = "";
      }

    //console.log(dig1result);
    //console.log(dig2result);
    //console.log(dig3result);

    var overallResult="";

    if (dig1result=="" && dig2result=="" && dig3result=="") {
      overallResult="Bagels";
    } else if (dig1result=="Fermi" && dig2result=="Fermi" && dig3result=="Fermi") {
      overallResult="You Win!!!"
      alert("Congratulations, You won!!!");
      location.reload();
    }
      else {
      overallResult=overallResult.concat(dig1result+",",dig2result+",",dig3result);
    }
    //console.log(overallResult);
    var numGuesses=document.getElementById('numGuesses');
    numGuesses.innerHTML = numOfGuesses;

    var prevGuess=document.getElementById('prevGuess');
    prevGuess.innerHTML = userGuess;

    var prevResult=document.getElementById('prevResult');
    prevResult.innerHTML = overallResult;

    document.getElementById('inputUserGuess').value="";
  }

}
