"use strict"

//define a function
function addNumbers(num1,num2){
    let result=num1+num2
    return result//functional scope
    //beyond the return statement-->any piece of code is unachievable
}

addNumbers(1,2)//mere a function call-->results are not stored
const result=addNumbers(2,3)//return answer stored in the variable result
console.log(result)

//default parameters-->makes up for the absence of the parameters during function call
function printName(name="NewUser"){
    //check for parametrer
    if(name===undefined){
        return "Please Enter Valid Username"
    }
    return `This user is ${name}`
}

console.log(printName("Ashish"))
console.log(printName())//if nothing is passed it prints undefined

//passing an array as parameter
//use the spread (...) operator
function shoppingList(...list){
    return list
}

console.log(shoppingList(100,200,300))

function numList(val1,val2,...num){
    return num
}

console.log(numList(200,300,4000,560))

//passing object as a parameter
const obj={
    name:"Ashish",
    age:20
}

function welcomeUser(anyobject){
    return `${anyobject.name}'s age is ${anyobject.age}`
}

console.log(welcomeUser(obj))
console.log(welcomeUser({
    name:"Alice",
    age:45
}))

