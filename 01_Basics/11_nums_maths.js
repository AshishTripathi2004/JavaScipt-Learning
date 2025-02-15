"use strict"

const balance=100
console.log(balance)

//using the new-keyword
const score=new Number(100)
console.log(score)

//using the number-functions
console.log(score.toString())
console.log(score.toString().length)
console.log(score.toFixed(2))//upto 2 decimal places

//using the precision function
let exp=new Number(1243.94)
console.log(exp.toPrecision(3))//rounds upto 5 significant digits

//locale string
let num=1232343
console.log(num.toLocaleString())//places are comma separated-->U.S standards system
console.log(num.toLocaleString('en-IN'))//as per the Indian Number System

//max value
console.log(Number.MAX_VALUE)
console.log(Number.MIN_VALUE)
console.log(Number.MAX_SAFE_INTEGER)
console.log(Number.MIN_SAFE_INTEGER)

//Math library
console.log(Math.abs(-33))
console.log(Math.floor(12.34))
console.log(Math.ceil(12.34))
console.log(Math.pow(2,3))
console.log(Math.sqrt(122))
console.log(Math.min(1,2,3,4,1,0.1))
console.log(Math.max(11,22,33,11,22))

//random value
console.log(Math.random())
