"use strict"

//globally declared variables
let a=100
const b=200

//disadvantages of var:cannot be used because of its scope related issues


if(true){
    //a,b-->have a local/block scope
    let a=200
    const b=200
    //c-->has a global scope because of the var keyword used in declaration
    //c can be detected even outside this if-block scope
    var c=900
    console.log(a,b,c)
}

console.log(a,b,c)

//block scope in for-loop
const arr=[1,2,3,4,5,6]
for(let index=0;index<arr.length;index++){
    let element=arr[index]
    console.log(element," ")
}

//scope in nested functions
function one(){
    const username="ABCDE"
    
    function two(){
        const website="XYZ.com"
        console.log(username+"--"+website)//username is accessible
    }

    //console.log(website)-->will not work as website is not accessible outside the two() declaration
    two()
}

one()

//declaring function 2 ways
//hoisting of function
console.log(addone(2))//function is  recognised--->since the function is hoisted
function addone(num){
    return num+1
}

//function expression
//function is not hoisted
//instead value is assigned to some variable during runtime
//unless this line is reached addtwo is in TEMPORAL DEAD ZONE-->TDZ-->REFERENCE ERROR
const addtwo=function(num){
    return num+2
}
console.log(addtwo(2))