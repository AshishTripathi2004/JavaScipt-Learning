"use strict"

let myDate=new Date()
console.log(myDate)
console.log(myDate.toDateString())
console.log(myDate.toLocaleString())
console.log(myDate.toISOString())
console.log(myDate.toJSON())
console.log(myDate.toTimeString())
console.log(myDate.toLocaleDateString())
console.log(myDate.toLocaleTimeString())
console.log(typeof myDate)

//create a new date
//array based indexing of months--0,1,2,3,4,5,6,7,8,9,10,11
let createdDate=new Date(2024,0,11,11,23,23)
console.log(createdDate.toDateString())
console.log(createdDate.toTimeString())

let newCreatedDate=new Date("11-01-1994")//mm-dd-yyyy format
console.log(newCreatedDate.toLocaleDateString())
console.log(newCreatedDate.getMonth()+1)
console.log(newCreatedDate.getYear())
console.log(newCreatedDate.getFullYear())

//get date and time of the very instant
let datetime_now=Date.now()
console.log(datetime_now)
console.log(createdDate.getTime())

let newDate=new Date()
console.log(newDate.toLocaleDateString("default",{
    weekday:"long"
}))
console.log(newDate.toLocaleDateString("default",{
    month:"numeric"
}))
