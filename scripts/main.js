/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/


function handValue(hand)
{
  let sum = 0;
  for (var i = 0; i < hand.length; i++)
  {

    if (hand[i] === "K"){
      sum += 10;
    } else if (hand[i] === "Q") {
      sum += 10;
    } else if (hand[i] === "J"){
      sum += 10;
    } else if (hand[i] === "A") {
      sum+= 1;
    }
      else {
      sum = sum + parseInt(hand[i])
    }
  }
  for (var j = 0; j < hand.length; j++)
  {
      if (sum < 12 && hand[j] === "A")
      {
        sum += 10
      }
  }
  return sum;
}


/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/
