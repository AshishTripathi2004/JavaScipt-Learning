//falsy values-->false,0,-0,"",'',BigInt 0n,undefined,null,NaN
//trusy values--->true,"false","0","abc",[],{},function(){}/empty-function

let arr=[]

if(arr){
    console.log("Welcome back...")
}else{
    console.log("GoodBye...")
}

//check for an empty array using the length property of arrays
if(arr.length===0){
    console.log("Array is empty...")
}else{
    console.log("Array is not empty...")
}

let obj={}
if(Object.keys(obj).length===0){
    console.log("Object is empty...")
}else{
    console.log("Object is not empty...")
}

//Nullish Coalescing Operator(??):null defined
//to check the value-->if exists assigned else null
//useful in databases
let s;
let val1=null??10
console.log(val1)//10
let val2=undefined??100
console.log(val2)//100
let val3=null??"length"
console.log(val3)

//ternary operator(?)
//condition?true:false

let price=100
price<=80?console.log("Less than 80"):console.log("More than 80")

let array=[1,2,3]
array.length?console.log("Array is not empty"):console.log("Array is empty")