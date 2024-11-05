"use strict"

//stack memory--->copy based
let a=10
let b=a
console.log(a,b)
b=100
console.log(a,b)

//heap memory--->reference based
let obj1={userId:11232,userName:"Ashish"}
let obj2=obj1
console.log(obj1.userId,obj2.userId)
obj1.userId=11111
console.log(obj1.userId,obj2.userId)

