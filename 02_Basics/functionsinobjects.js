"use strict"

//using symbols within an object
let mySym=Symbol("This is a JsUser.")

//using object literals
//pass the symbol name in curly braces for it to be treated as a symbol by the js-compiler
const JsUser={
    name:"Ashish",
    age:20,
    email:"ashishtripathi0306@gmail.com",
    isLoggedIn:true,
    "previousLogins":["Monday","Tuesday","Wednesday"],
    [mySym]:"Symbol Recognized"
}

JsUser.greeting=function(){
    return "This is a Js User.."
}
JsUser.greeting2=function(){
    return `Welcome here...${this.name}`
}

console.log(JsUser.greeting())
console.log(JsUser.greeting2())

//combining two objects
//using assign method
let object1={1:"a",2:"b"}//not a singleton object
let object2={3:"c",4:"d"}

let object3=Object.assign(object1,object2)//object1 is modified 
console.log(object3)
console.log(object1===object3)//returns true

//use an empty object to prevent modification of any of the source objects
let src1={1:"a",2:"b"}
let src2={3:"c",4:"d"}

let src3=Object.assign({},src1,src2)//{}-->treated as the target
console.log(src3)
console.log(src1===src3)//returns false

//using the spread operator
let obj1={1:1,11:2,111:3}
let obj2={1111:4,11111:5,111111:6}
let obj3={...obj1,...obj2}
console.log(obj3)

//object destructure
let igUser={
    name:"Ashish",
    age:20,
    yearJoined:2020,
    isLoggedIn:true,
    active:"yes"
}
const {age}=igUser
console.log(age)

const {yearJoined:yj}=igUser//alias name
console.log(yj)

//layering or nesting in objects
let userInfo={
    name:{
        username:{
            fullname:"Ashish Tripathi",
            firstname:"Ashish",
            lastname:"Tripathi"
        },
        adminname:{
            fullname:"Brendon Urie"
        }
    },
    password:"1994",
    age:20
}

console.log(userInfo.name.username.fullname)
//use optional chaining(?.) to check whether a particular object or attribute exists
console.log(userInfo.name.dbaname?.firstname)//returns undefined w/o throwing error

/*
---JSON API OBJECT STRUCTURE---
strings in the key values as well
valid object stucture in JSON response
may also return array of objects
{
"name":"abcd",
"systemNo":20,
"email":"aabbccdd1234@gmail.com"
}
*/

//array of objects
let arr=[
    {"name":"a",
      "age":20  
    },
    {"name":"b",
        "age":10  
      },
    {"name":"c",
        "age":22  
      }
]

console.log(arr[0]["name"])

//object methods
console.log(Object.keys(JsUser))
console.log(Object.values(JsUser))
console.log(Object.entries(JsUser))