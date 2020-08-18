let data1 = [1, 13, 3, 2, 5, 6, 52, 2];

function evenLast(numbers) {
  let evens = [];
  for(let i = 0; i < numbers.length; i += 2) {
    evens.push(numbers[i]);
    console.log(evens);
  }
  let sum = evens.reduce((accu, cur) => {
    return accu += cur;
  }, 0);
  console.log(sum * numbers[numbers.length - 1]);
  let answer = sum * numbers[numbers.length - 1];

  if(isNaN(answer)) {
    answer = 0;
  }
  return answer;
}

evenLast(data1);
