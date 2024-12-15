//while loop

let index=0
while(index<10){
    console.log(index)
    index++
}

let flag=true
let album=["red","1989","lover","folklore","reputation"]
let idx=0
while(flag && idx<album.length){
    if(album[idx]=="reputation"){
        console.log(`Happy Birthday ${album[idx]}`)
        flag=false
    }else{
        console.log(`You are invited to the party..${album[idx]}`)
    }
    
    idx++
}

let n=10
do{
    console.log(n)
    n--
}while(n)
    