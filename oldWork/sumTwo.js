let data1 = [2, 3, 5, 9];
// let data2 = [1, 6, 7, 9];

const sum2 = (data, target) => {
  let dataHash = {};
  let results = [];
  // 
  for(let i = 0; i < data.length; i++) {
    dataHash[i] = { value: data[i], otherVals: [] };
    for(let j = 0; j < data.length; j++) {
      if(data[i] !== data[j]) {
        dataHash[i].otherVals.push(data[j]);
      }
    }
    /* eslint-disable-next-line no-console */
    console.log('put it on the', dataHash[i].otherVals);
    for(let k = 0; k < dataHash[i].otherVals.length; k++) {
      /* eslint-disable-next-line no-console */
      console.log(dataHash[i].value === dataHash[i].otherVals[k]);
      if(dataHash[i].value + dataHash[i].otherVals[k] === target) {
        results = [dataHash[i].value, dataHash[i].otherVals[k]];
      }
    }
    /* eslint-disable-next-line no-console */
    console.log('pizza');
  }
  /* eslint-disable-next-line no-console */
  console.log(dataHash, 'results', results);
  return results;

};

sum2(data1, 8);
