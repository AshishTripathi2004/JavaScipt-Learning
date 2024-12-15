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


