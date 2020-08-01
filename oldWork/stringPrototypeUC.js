let data3 = 'c';
let data4 = 'C';
let data1 = 'hello I AM DONALD';
let data2 = 'HELLO I AM DONALD';
// "ACSKLDFJSgSKLDFJSKLDFJ".isUpperCase() == false
// "ACSKLDFJSGSKLDFJSKLDFJ".isUpperCase() == true


String.prototype.isUpperCase = function() {
  console.log('this', this.toString(), 'string.toUpperCase', this.toUpperCase());
  let finalCondition = this.toString() === this.toUpperCase();
  /* eslint-disable-next-line no-console */
  console.log(finalCondition);
  return finalCondition;
};

data4.isUpperCase();
