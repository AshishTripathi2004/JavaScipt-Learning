"use strict"

//collection of different or same data-types
//0-based indexing
//array copy operations create shallow copies
//DEEP COPY:an actual copy created in the memory
//SHALLOW COPY:reference added to an existing memory location
const arr=[1,2,3,4,5,6]
console.log(arr)
console.log(arr[0])
console.log(arr.length)

//array methods
arr.push(7)
console.log(arr)
console.log(arr.pop())
console.log(arr)

arr.unshift(0)
console.log(arr)
console.log(arr.shift())
console.log(arr)

console.log(arr.includes(90))
console.log(arr.lastIndexOf(1))

let arr_join=arr.join()//joins csv values 
console.log(arr_join,typeof arr_join)

//slicing an array
let arr_slice=arr.slice(0,3)
console.log(arr_slice)

//splicing an array
//splicing affects the original array condition
let arr_splice=arr.splice(0,3)
console.log(arr_splice)
console.log(arr)

//array of strings
let p_colors=["red","green","blue"]
let c_colors=["cyan","yellow","maroon"]

//concat function returns a new array
let new_colors=p_colors.concat(c_colors)
console.log(new_colors)

//spread operator
let alpha1=["a","b","c","d"]
let alpha2=["e","f","g"]
let alpha3=["h","i","j","k","l"]

let all_alpha=[...alpha1,...alpha2,...alpha3]
console.log(all_alpha)

//creating an array from a string
let new_arr=Array.from("TaylorSwift")
console.log(new_arr)

let s1=100
let s2=200
let s3=300
let s_array=Array.of(s1,s2,s3)
console.log(s_array)

//ravelling or flatteining a multi-dimensional array
let arr_=[[1,2,3],[4,5,6,[7,8,9]]]
let flat_arr_1=arr_.flat(1)
console.log(flat_arr_1)
let flat_arr_inf=arr_.flat(Infinity)
console.log(flat_arr_inf)