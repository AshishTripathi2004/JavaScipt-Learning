"use strict"

const temperature=100

if(temperature===101){//===--->strict checking
    console.log("Hello")
}else if(temperature=="100"){//==--->just value matching and type conversions implicitly
    console.log("Namaste")
}else{
    console.log("Bonjour")
}

//allow user to login depending on email or phone number
const isUserEmail=true
const isUserPhone=true

if(isUserEmail || isUserPhone){
    console.log("Allow User Login")
}else{
    console.log("Cannot Facilitate Login")
}