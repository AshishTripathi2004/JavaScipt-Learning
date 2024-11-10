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

//accessing the object elements
//using the brackets notation
//keys to be passed as strings unless a symbol
console.log(JsUser["email"])
console.log(JsUser["previousLogins"])
console.log(JsUser[mySym])//this is a symbol hence only square brackets are used

//using dot operator
console.log(JsUser.email)
console.log(JsUser.isLoggedIn)

//freezing the object-->no further changes are permitted
Object.freeze(JsUser)
JsUser["age"]=21//change will not be reflected as freeze makes the object read only
console.log(JsUser)
