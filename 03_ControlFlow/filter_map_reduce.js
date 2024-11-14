"use strict"

//forEach does not return anything
const items=["pen","pencil","eraser","sharpener","ruler","glue","tape"]
let arr=items.forEach((items)=>{
    console.log(items)
    return items
})
console.log(arr)

//filter operation on arrays
let nums=[1,2,3,4,5,6,7,8,(Math.PI)]
const myNums=nums.filter((items)=>(items>3))
console.log(myNums)

//if curly braces are used for the function body
const newNums=nums.filter((items)=>{
    return items>2
})
console.log(newNums)

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ]

//print Science genre books
const bookList=books.filter((items)=>(items.genre==="Science" && items.publish>1995))
console.log(bookList)

//map method
const numList=[1,2,3,4,5,6,7,8,9,10]
const numbers=numList.map((num)=>(num+10))
console.log(numbers)

const tableTen=numList.map((num)=>{
    return num*10
})
console.log(tableTen)

//method chaining
//next call will work on the next aggregated array
const resChain=numList.map((num)=>(num*10)).map((num)=>(num+1)).filter((nums)=>(nums>40))
console.log(resChain)

//reduce method
const numberList=[1,2,3,4,5]
const initialVal=0
//accumulator-->preveious value
//currentValue-->current item from the array
const total=numberList.reduce((accumulator,currentValue)=>{
    console.log(`accumulator:${accumulator}   current_value:${currentValue}`)
    return accumulator+currentValue},initialVal)
console.log(total)

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const bill=shoppingCart.reduce((acc,item)=>acc+item.price,0)
console.log(bill)