//declaring and defining variables
const accountId=122324
let accountName="Ashish Tripathi"
var accountMail="ashish@gmail.com"
accountCity="Noida"
let accountState

console.log(accountId)
console.table([accountId,accountName,accountMail,accountCity,accountState])

/*
JavaScript Variable Declarations:

1. const:
   - The value is fixed and cannot be reassigned after the initial assignment.
   - Best used for constants or values that should not change.

2. let:
   - Allows the value to be updated any number of times.
   - Recommended as per modern JavaScript (ECMAScript standards).
   - Block-scoped, meaning it is limited to the block in which it is declared.

3. var:
   - The older way of declaring variables in JavaScript.
   - Function-scoped, which can lead to scope-related issues.
   - No longer recommended in modern JavaScript.

4. No declaration:
   - Assigning a value to a variable without using const, let, or var.
   - Poor practice; creates a global variable (if not in strict mode).
   - Should always be avoided for maintainability and to prevent unintended side effects.
*/
