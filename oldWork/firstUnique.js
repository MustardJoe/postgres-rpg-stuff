const data1 = 'ppaathrise';
// return 4.

function firstUniqChar(s) {
  let charArr = s.split('');
  let charCount = {};
  let charSet = [...new Set(charArr)];
  for(let i = 0; i < charSet.length; i++) {
    charCount[charSet[i]] = 0;
  }
  for(let j = 0; j < charArr.length; j++) {
    charCount[s.split('')[j]]++;
  }
  let appearsOnlyOnce = [];
  for(let k = 0; k < charArr.length; k++) {

    if(charCount[charSet[k]] && charCount[charSet[k]] < 2) {
      appearsOnlyOnce.push(Object.keys(charCount)[k]);
    }
  }
  return charArr.indexOf(appearsOnlyOnce[0]);
}

firstUniqChar(data1);
