// Given an unlimited supply of coins of a given denomination, 
// find the minimum number of coins required to get a specific
// amount of change.

// this will be a funciton which takes a Set of coin denominations
// and a specific amount of change eg changeFind(Set{ 1, 5, 7, 10 }, 18) 
// it will return an Array with the least number of coins possible 
// like so [1, 7, 10]

let ourArr = [1, 5, 10];

const changeFinder = (arr, amount, returnArr = []) => {
  // Initial check to see if we have valid inputs and need to run our function
  if(amount <= 0 && returnArr.length < 1) {
    /* eslint-disable-next-line no-console */
    console.log('No change needed');
    return;
  }

  // Recursive 'End' guard clause: check are we finished (remaining change to divy up is 0 and returnArr isn't empty)
  if(amount === 0 && returnArr.length >= 1) {
    /* eslint-disable-next-line no-console */
    console.log('Final Change To Return:', returnArr.sort((a, b) => {
      return a - b;
    }));
    return returnArr.sort((a, b) => {
      return a - b;
    });
  }

  //check to see if we need the biggest coin: if we do, check to see how many of them we need
  // then subtract from the 'amount' the value of the big coin/s
  if(amount >= arr[arr.length - 1]) {
    let numbNeededOfCurentCoin = Math.floor(amount / arr[arr.length - 1]);
    for(let i = 1; i <= numbNeededOfCurentCoin; i++) {
      returnArr.push(arr[arr.length - 1]);
      amount = amount - arr[arr.length - 1];
    }
  }

  // whether we need the big coin or not, when we are done checking for it, we remove it from array
  arr.pop(arr.length - 1);

  // run the recursive call with the remaining amount and remaing coins to be checked in arr
  return changeFinder(arr, amount, returnArr);
};

changeFinder(ourArr, 28);
