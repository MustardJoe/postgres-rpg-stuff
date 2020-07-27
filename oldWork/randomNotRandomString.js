function array10(){
  const makeArr = () => {
    let arrChars = ['A', 'B', 'C', 'D'];
    let randomArr = [];
    for(let i = 0; i < 10; i++) {
      randomArr.push(arrChars[Math.floor(Math.random()* 4)]);
    }
    console.log(randomArr.includes('A') && randomArr.includes('B') && randomArr.includes('C') && randomArr.includes('D'));

    if(randomArr.includes('A') && randomArr.includes('B') && randomArr.includes('C') && randomArr.includes('D')) {
      return randomArr;
    } else {
      return makeArr();
    }
  };
  let returnArr = [];
  for(let j = 0; j < 10; j++) {
    returnArr.push(makeArr());
  }
  return returnArr;
}

array10();
