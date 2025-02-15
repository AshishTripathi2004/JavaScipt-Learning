//"use strict"

//this keyword-->refers to the current context of an object
const user={
    username:"Taylor Swift",
    age:"34",
    welcomeMessage:function(){
        console.log(`${this.username},Hello and Welcome to The Eras Tour`)
    },
    printCurrent:function(){
        console.log(this)
    }
}

//call an object function-->using the square notation and dot operator
user["welcomeMessage"]()
user["printCurrent"]()
user.username="Travis Kelce"
user.welcomeMessage()
user.printCurrent()

console.log(this)//no referencing object;refers to an empty object in the node environment

function coffee(){
    console.log(this)//non-strict mode-->binds to the global object in node
}
coffee()//in strict mode-->prevents accidental golbal binding therfore returns undefined

function username(){
    let n="abc"
    console.log(this.n)//returns undefined--n is not a property of the global object
}
username()