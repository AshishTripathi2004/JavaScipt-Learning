"use strict"

let str="Ashish"

//string embedding
console.log(`The name is ${str}.`)

//stored as key-value pairs
//key-->index positions
//value-->character at the position
//0-based indexing is followed
//length is also a property returning the total number of characters
console.log(str[1])
console.log(str.length)

//string functions
console.log(str.toUpperCase())
console.log(str.toLowerCase())
console.log(str.charAt(2))
console.log(str.bold())//deprecated from javascript
console.log(str.startsWith("A"))
console.log(str.endsWith("a"))

let s="  abc  "
console.log(s.trim())
console.log(s.trimEnd())
console.log(s.trimStart())

//string split function
let alpha="abcdefghijklmnopqrstuvwxyz"
let alpha_array=alpha.split("")
console.log(alpha_array)

let userDob="2024/11/10"
let split_dob=userDob=userDob.split("/")
console.log(split_dob)


//index of first occurrence of a after or at index-1
let a="abbaaaa"
console.log(a.indexOf("a",1))
//last index of occurrence of a after or at index-2
console.log(a.lastIndexOf("a",4))

//replace and substrings
let b="bbaaacccb"
console.log(b.replace("b","z"))
console.log(b.replaceAll("b","z"))
console.log(b.substring(1,5))//end-index not included


/*
STRING OPERATIONS IN JavaScript:

1. String Embedding:
   - Used with **template literals** (backticks `` ` ``).
   - Embeds variables or expressions using `${}`.
   - Example:
     ```javascript
     let str = "world";
     console.log(`Hello, ${str}!`); // Output: Hello, world!
     ```
   - Useful for dynamic content in web development.

2. String Structure:
   - Represented as a sequence of characters (key-value pairs).
   - Key: Index (0-based).
   - Value: Character (letters, digits, symbols, whitespace).
   - Enclosed in double (`"`) or single (`'`) quotes.
   - Example:
     ```javascript
     let str = "Hello";
     console.log(str[1]); // Output: e
     ```

3. String Character Properties:
   - Characters can be accessed using:
     - `str[i]` (direct indexing).
     - `str.charAt(i)` (method-based).
   - Example:
     ```javascript
     let str = "JavaScript";
     console.log(str[4]);       // Output: S
     console.log(str.charAt(4)); // Output: S
     ```

4. String Length Property:
   - Returns the number of characters in a string (integer ≥ 0).
   - Example:
     ```javascript
     let str = "Hello";
     console.log(str.length); // Output: 5
     ```

5. Substring Function:
   - Extracts a portion of a string.
   - Syntax: `str.substring(start, end)` (end is exclusive).
   - Example:
     ```javascript
     let str = "JavaScript";
     console.log(str.substring(0, 4)); // Output: Java
     ```

6. Split Function:
   - Divides a string into an array of substrings based on a separator.
   - Example:
     ```javascript
     let str = "day-month-year";
     console.log(str.split("-")); // Output: [ "day", "month", "year" ]
     ```

7. Case Conversion:
   - Converts string case using:
     - `str.toUpperCase()` (to uppercase).
     - `str.toLowerCase()` (to lowercase).
   - Example:
     ```javascript
     let str = "Hello";
     console.log(str.toUpperCase()); // Output: HELLO
     console.log(str.toLowerCase()); // Output: hello
     ```

8. Trim Functions:
   - Removes leading or trailing whitespaces.
   - Variants:
     - `str.trim()`: Removes both leading and trailing spaces.
     - `str.trimStart()`: Removes leading spaces.
     - `str.trimEnd()`: Removes trailing spaces.
   - Example:
     ```javascript
     let str = "  Hello  ";
     console.log(str.trim()); // Output: "Hello"
     ```

9. Starts/Ends-With Functions:
   - Checks if a string starts or ends with a specific substring.
   - Methods:
     - `str.startsWith(substring)`.
     - `str.endsWith(substring)`.
   - Example:
     ```javascript
     let str = "JavaScript";
     console.log(str.startsWith("Java")); // Output: true
     console.log(str.endsWith("Script")); // Output: true
     ```

10. Index of Characters:
    - Finds the position of a character or substring:
      - `str.indexOf(substr, start)` (first occurrence).
      - `str.lastIndexOf(substr)` (last occurrence).
    - Example:
      ```javascript
      let str = "banana";
      console.log(str.indexOf("a")); // Output: 1
      console.log(str.lastIndexOf("a")); // Output: 5
      ```

11. Replace Functions:
    - Replace parts of a string:
      - `str.replace(substr, newSubstr)` (replaces the first match).
      - `str.replaceAll(substr, newSubstr)` (replaces all matches).
    - Example:
      ```javascript
      let str = "apple orange apple";
      console.log(str.replace("apple", "banana")); // Output: banana orange apple
      console.log(str.replaceAll("apple", "banana")); // Output: banana orange banana
      ```
*/
