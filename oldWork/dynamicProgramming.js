// Given an unlimited supply of coins of a given denomination, 
// find the minimum number of coins required to get a specific
// amount of change.

// this will be a funciton which takes a Set of coin denominations
// and a specific amount of change eg changeFind(Set{ 1, 5, 7, 10 }, 18) 
// it will return an Array with the least number of coins possible 
// like so [1, 7, 10]

let ourArr = [1, 5, 10];

const changeFinder = (arr, amount) => {
  let returnArr = [];

  if(amount >= arr[arr.length - 1]) {
    console.log('need big coin');
    returnArr.push(arr[arr.length - 1]);
    let currentCoins = Math.floor(amount / arr[arr.length - 1]);
    console.log('current coins thing', currentCoins);
    for(let i = 1)
  }
  console.log('amount modulo biggest coin', amount % arr[arr.length - 1], 'amount divided by big coin', Math.floor(amount / arr[arr.length - 1]));
  //check to see if we need the biggest coin, if we do, check to see how
  //many of them we need

  // check are we finished or is there remaining change to divy up

  // recursively call the changeFinder function, passing in a modified array
  // without the larget coin and also passing in the remaining amount after 
  // subtracting the largest coins

  // return [returnValue, ...changeFinder(subSet, remainingCoins)]




  // if(arr[arr.length - 1] <= amount) {

  // }
};

changeFinder(ourArr, 23);

