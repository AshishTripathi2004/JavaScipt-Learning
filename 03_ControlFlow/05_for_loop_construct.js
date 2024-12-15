//for loops--iterations and performing repeated actions

let array=[1,2,3,4,5]

//for loop with break statement
//break statement--flow of execution stops and the control is shifted outside the loop
console.log("BREAK")
for(let index=0;index<array.length;index++){
    if(index==3){
        break;
    }
    let element=array[index]
    console.log(element)
}

//for loop with continue statement
//continue statement--flow of execution for particular iterations os skipped and rest are work
console.log("CONTINUE")
for(let index=0;index<array.length;index++){
    if(index==3){
        continue;
    }
    let element=array[index]
    console.log(element)
}

//nested for loops
//prints a right triangle
for(let i=1;i<=5;i++){
    let str=""
    for(let j=1;j<=i;j++){
        str=str+"* "
    }
    console.log(str)
}

