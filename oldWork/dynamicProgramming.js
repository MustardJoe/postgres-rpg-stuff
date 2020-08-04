// Given an unlimited supply of coins of a given denomination, 
// find the minimum number of coins required to get a specific
// amount of change.

// this will be a funciton which takes a Set of coin denominations
// and a specific amount of change eg changeFind(Set{ 1, 5, 7, 10 }, 18) 
// it will return an Array with the least number of coins possible 
// like so [1, 7, 10]

let ourArr = [3, 7, 10];

const changeFinder = (coinDenominations, amount, changeGiven = []) => {
  // Initial check to see if we have valid inputs and need to run our function
  if(amount <= 0 && changeGiven.length < 1) {
    /* eslint-disable-next-line no-console */
    console.log('No change needed');
    return;
  }

  // Recursive 'End' guard clause: check are we finished (remaining change to divy up is 0 and returnArr isn't empty)
  if(amount < Math.min(...coinDenominations) && changeGiven.length >= 1) {
    /* eslint-disable-next-line no-console */
    console.log('Final Change To Return:', changeGiven);
    return changeGiven;
  }

  //check to see if we need the biggest coin: if we do, check to see how many of them we need
  // then subtract from the 'amount' the value of the big coin/s
  if(amount >= coinDenominations[coinDenominations.length - 1]) {
    let numbNeededOfCurentCoin = Math.floor(amount / coinDenominations[coinDenominations.length - 1]);
    for(let i = 1; i <= numbNeededOfCurentCoin; i++) {
      changeGiven.unshift(coinDenominations[coinDenominations.length - 1]);
      amount = amount - coinDenominations[coinDenominations.length - 1];
    }
  }

  // whether we need the big coin or not, when we are done checking for it, we remove it from array
  coinDenominations.pop(coinDenominations.length - 1);
  console.log(coinDenominations, amount, changeGiven);
  // run the recursive call with the remaining amount and remaing coins to be checked in coinDenominations
  return changeFinder(coinDenominations, amount, changeGiven);
};

changeFinder(ourArr, 28);
