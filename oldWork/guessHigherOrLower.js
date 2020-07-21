
const guess = (numb) => {
  let target = 2;
  return numb === target ? 0 : numb < target ? 1 : -1;
}

var guessNumber = function(n, 
  high = n, low = 1, mid = low
  + Math.floor((high - low) / 2)
) 
{
  console.log('low', low, 'high', high, 'mid', mid, guess(mid) === 0);
  if(guess(mid) === 0) {
    console.log('do we return?', 'mid', mid);
    return mid;
  }
    
  else if(guess(mid) === -1) {
    console.log('should not run at end', mid);
    high = mid - 1;
    mid = low + Math.floor((high - low) / 2);
    return guessNumber(n, high, low, mid);
  }
  else if(guess(mid) === 1) {
    console.log('should not run at end', mid);
    low = mid + 1;
    mid = low + Math.floor((high - low) / 2);
    return guessNumber(n, high, low, mid);
  }
  console.log('mid', mid, 'where is mid being reassigned?');
  return mid;
};

guessNumber(2);
