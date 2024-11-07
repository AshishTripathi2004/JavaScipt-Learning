"use strict"

//using object literals
const JsUser={
    name:"Ashish",
    age:20,
    email:"ashishtripathi0306@gmail.com",
    isLoggedIn:true,
    "previousLogins":["Monday","Tuesday","Wednesday"]
}

//accessing the object elements
//using the brackets notation
console.log(JsUser["email"])
console.log(JsUser["previousLogins"])

//using dot operator
console.log(JsUser.email)