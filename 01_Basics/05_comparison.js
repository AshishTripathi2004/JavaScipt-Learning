"use strict"

console.log(1>2)
console.log(1<2)
console.log(1==2)

console.log(1=="1")
console.log(null=="")
console.log(null==0)
console.log(0==null)

console.log(1===1)
console.log(1==="1")//matches both data type and value-->offers strict checking of the values

console.log(1>"1")
console.log(null==NaN)

console.log(null==undefined)
console.log(undefined==null)

console.log(NaN==NaN)

/*
Loose Equality (==):
- Performs type coercion to compare values.
- Example:
  1 == "1" // true (string "1" is coerced to the number 1)

Strict Equality (===):
- Compares both value and type without coercion.
- Example:
  1 === "1" // false (different types: number vs string)

Special Cases:
1. null == undefined // true (both represent "absence of value")
2. null == 0         // false (null is only loosely equal to undefined)
3. NaN != NaN        // true (NaN is not equal to itself)

Best Practice:
- Use strict equality (===) to avoid unintended type coercion and ensure accurate comparisons.
*/
