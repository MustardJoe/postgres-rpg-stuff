// a generator is a function which returns an itterator.
// an itterator is an object which itterates over values and returns them 
// one at a time.


// itterator protocol is an object which has a next() func.
// next returns { value: aValue, done: boolean 
// function makeRangeIterator(start = 0, end = Infinity, step = 1) {
//   let nextIndex = start;
//   let iterationCount = 0;

//   const rangeIterator = {
//     next: function() {
//       let result;
//       if(nextIndex < end) {
//         result = { value: nextIndex, done: false }
//         nextIndex += step;
//         iterationCount++;
//         return result;
//       }
//       return { value: iterationCount, done: true }
//     }
//   };
//   return rangeIterator;
// }

// function* myGen() {
//   let count = 0
//   while(count < 4){
//     yield count;
//     count++
//   }
//   yield count;
// }

// let myItter = myGen();
// let myOutput = myItter.next();
// console.log('myOutput', myOutput);
// myOutput = myItter.next();
// console.log('myOutput', myOutput);
// myOutput = myItter.next();
// console.log('myOutput', myOutput);
// myOutput = myItter.next();
// console.log('myOutput', myOutput);
// myOutput = myItter.next();
// console.log('myOutput', myOutput);
// myOutput = myItter.next();
// console.log('myOutput', myOutput);
// console.log('myItter', myItter)

function* jonGen(sent) {
  let words = sent.split(' ');
  let count = 0;

  while(count < words.length) {
    yield words[count];
    count++;
  }
  return count;
}

let sent1 = 'it was a good day at the grocery store';
let sent2 = 'hi pal! happy day!';

let jonItter = jonGen(sent1);
let curr  = jonItter.next();

while(!curr.done) {
  console.log(curr.value);
  curr = jonItter.next();
}
