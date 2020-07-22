let numbs = [5, 7, 7, 8, 8, 10],
  target = 8;

var searchRange = function(nums, target) {
  let results = [];
  if(nums.includes(target)) {
    for(let i = 0; i < nums.length; i++) {
      if(nums[i] === target) {
        results.push(i);
      }
    }
  } else { results = [-1, -1]; }
  return [results[0], results[results.length - 1]];
};

searchRange(numbs, target);
