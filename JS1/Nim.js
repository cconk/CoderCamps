function Pile(name,numRocks){
  this.name = name;
  this.numRocks = numRocks;
}

var pilea = new Pile('Pile A',5);
var pileb = new Pile('Pile B',5);
var pilec = new Pile('Pile C',5);

do {

  var playerPileInput = prompt('Enter the pile you would like to remove rocks from\
  select from a,b, or c');
  var playerNumRocksInput = prompt('Enter the number of rocks you would like\
  to remove');

  if (playerPileInput =='a' && playerNumRocksInput >= pilea.numRocks) {
      pilea.numRocks = 0;
    } else if (playerPileInput =='a' && playerNumRocksInput < pilea.numRocks) {
      pilea.numRocks = pilea.numRocks-playerNumRocksInput;
    }

    if (playerPileInput == 'b' && playerNumRocksInput >= pileb.numRocks) {
      pileb.numRocks = 0;
    } else if(playerPileInput == 'b' && playerNumRocksInput < pileb.numRocks) {
      pileb.numRocks = pileb.numRocks-playerNumRocksInput;
    }

    if (playerPileInput == 'c' && playerNumRocksInput >= pilec.numRocks) {
      pilec.numRocks = 0;
    } else if (playerPileInput == 'c' && playerNumRocksInput < pilec.numRocks) {
      pilec.numRocks = pilec.numRocks-playerNumRocksInput;
    }

  function getRandomNumber(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
  }

  var randomPile = getRandomNumber(1,3);
  var randomNumRocks = getRandomNumber(1,5);

  if (randomPile == 1 && randomNumRocks >= pilea.numRocks) {
        pilea.numRocks = 0;
      } else if (randomPile == 1 && randomNumRocks < pilea.numRocks) {
        pilea.numRocks = pilea.numRocks-randomNumRocks;
      }

  if (randomPile == 2 && randomNumRocks >= pileb.numRocks) {
        pileb.numRocks = 0;
      } else if (randomPile == 2 && randomNumRocks < pileb.numRocks) {
        pileb.numRocks = pileb.numRocks-randomNumRocks;
      }

  if (randomPile == 3 && randomNumRocks >= pilec.numRocks) {
        pilec.numRocks = 0;
      } else if (randomPile == 3 && randomNumRocks < pilec.numRocks) {
        pilec.numRocks = pilec.numRocks-randomNumRocks;
      }

      console.log(pilea.numRocks);
      console.log(pileb.numRocks);
      console.log(pilec.numRocks);

  playerPileInput = '';
  playerNumRocksInput = 0;

} while ((pilea.numRocks !=0 && pileb.numRocks !=0) || (pileb.numRocks !=0 && pilec.numRocks !=0) || (pilea.numRocks !=0 && pilec.numRocks !=0))
