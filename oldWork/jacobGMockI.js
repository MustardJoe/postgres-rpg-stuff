s='abcabcabcabc'
"period" - int, 3, 6, 12

input: str, int
output: bool


'x,y,z'.split(',') => ['x', 'y', 'z']
=> ['', '', '']


// resultArr = [] -> ['', '', ''] -> [true, true, true] -> true

const periodFinder = (str, int) => {
    // validations -- is string empty? is period <= 0? is period > str.length()
    let testPeriod = str.slice(0, int);
     // ideally, avoid unnecessary copies
let stringToArr = str.split(testPerior);
    let resultArr = [];
    
for(let i = 0; i < stringToArr.length; i++) {
    // if resultArr[i] !== '' return false
resultArr.push(stringToArr[i] === ‘’)
    }
     // return true
    return resultArr.reduce((acc, cur) => {
        cur === true;
    }, false}
}

[true, true, true] --reduce--> true

fixed version of reducer
[false, false, true].reduce((acc, cur) => {
        cur && acc;
    }, true}


// try me later! optimal solution -- compare character-by-character
'abcabcabca', 3
       ^  ^

---

PART II

input: str
output int, the smallest period of the string (if there are multiple, only the smallest)

