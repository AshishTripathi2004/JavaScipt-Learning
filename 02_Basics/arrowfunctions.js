"use strict"

//compact function declaration
const val=(num)=>{
    console.log(num+" Arrow Function Called")
}

val(2)

const addNum=(num1,num2)=>{
    return num1+num2
}

console.log(addNum(2,3))

//implict return of an arrow function
//parentheses are used-->no return keyword needed
const multNum=(num1,num2)=>(num1*num2)
console.log(multNum(2,4))