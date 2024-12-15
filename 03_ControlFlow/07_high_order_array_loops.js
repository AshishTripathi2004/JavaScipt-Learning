//for of loops
const countryList=["INDIA","CHINA","IRELAND","JAPAN","NIGERIA","MALAYSIA","AUSTRALIA","CHILE","COLOMBIA"]
for(let country of countryList){
    console.log(country)
}

const firstname="Ashish"
for(let letter of firstname){
    console.log(letter)
}

const countryCode=new Map()
countryCode.set("India","001")
countryCode.set("China","005")
countryCode.set("Japan","002")
for(let code of countryCode){
    console.log(code[0],"--->",code[1])
}
for(let [country,code] of countryCode){
    console.log(country,"--->",code)
}

//for in loop
//enumerable properties
const user={
    name:"Rico Menedez",
    age:22,
    occupation:"Actor",
    yearsActive:5,
    maritalStatus:"Engaged"
}

for(let keys in user){
    console.log(keys,"---",user[keys])
}

let languages=["java","python","c++","ruby","c","javascript","swift"]
for(let index in languages){
    console.log(languages[index])
}

//forEach
const beverages=["tea","coffee","mojito","beer","soda","iced tea"]
beverages.forEach(function(item){
    console.log(item)
})

beverages.forEach((item)=>{console.log(item)})

function print(item){
    console.log(item)
}
beverages.forEach(print)//just give the reference donot call or execute
beverages.forEach((item,index,arr)=>console.log(item,index,arr))

const obj_list=[
    { language:"JavaScript",
        extension:".js"
    },
    { language:"Java",
        extension:".java"
    },
    { language:"C++",
        extension:".cpp"
    },
    { language:"Python",
        extension:".py"
    }
]

obj_list.forEach((item)=>(console.log([item.language,item.extension])))