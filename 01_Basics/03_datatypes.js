"use strict";//to ensure the latest version of JS is used

//Number-->positive,negative,integer,float values
let accountId=123
console.log(accountId,typeof accountId);
//string-->array of characters
let accountName="ABC_123"
console.log(accountName,typeof accountName);
//boolean-->true or false values
let isLoggedIn=false
console.log(isLoggedIn,typeof isLoggedIn)
//bigInt-->to store large values
let accountAddressId=BigInt("122323343443343321")
console.log(accountAddressId,typeof accountAddressId)
//null-->represents the abscence of value-->means no value was present
//type is object
let accountState=null
console.log(accountState,typeof accountState)
//undefined-->value not yet assigned
let accountVisibilty
console.log(accountVisibilty,typeof accountVisibilty)


/*
DATA TYPES IN JavaScript:

1. Number:
   - Represents numeric values, including integers, floats, negatives, and positives.
   - Special cases:
     - `NaN` (Not-a-Number): Result of invalid operations like 0/0.
     - `Infinity` and `-Infinity`: Values beyond the range of finite numbers.
   - Properties:
     - `Number.MAX_VALUE`: Largest positive number (≈ 1.7976931348623157e+308).
     - `Number.MIN_VALUE`: Smallest positive number (≈ 5e-324).
     - `Number.MAX_SAFE_INTEGER`: Largest safe integer (9007199254740991).
     - `Number.MIN_SAFE_INTEGER`: Smallest safe integer (-9007199254740991).

2. String:
   - Represents text or character arrays.
   - Enclosed in single quotes (`'`), double quotes (`"`), or backticks (`` ` `` for template literals).
   - Example: `'Hello'`, `"World"`, `` `Hello, ${name}!` ``.

3. Boolean:
   - Represents logical values: `true` or `false`.
   - Often used in conditions and comparisons.

4. BigInt:
   - Handles very large integers beyond the `Number` range.
   - Created using `BigInt()` or by appending `n` to a number.
   - Example: `BigInt(9007199254740992)` or `9007199254740992n`.

5. null:
   - Represents the intentional absence of any value.
   - Type: `object` (a legacy quirk in JavaScript).
   - Example: `let value = null;`

6. undefined:
   - Indicates a variable has been declared but not assigned a value.
   - Example: 
     ```javascript
     let value; 
     console.log(value); // undefined
     ```
*/


