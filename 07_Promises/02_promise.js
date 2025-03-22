
const promiseOne = new Promise(function (resolve, reject) {
    //async tasks -- DBcalls, cryptography, network calls
    //used as a promise for eventual execution of some asynchronous task
    setTimeout(function(){
        console.log("ASYNC TASK COMPLETED.....");
        resolve();
    },1000)
})

//promise is consumed or rejected 
//checked using then and catch
//if consumed, then block executes
//if rejected, then catch executes
//in any case, finally executes 
promiseOne.then(function(){
    console.log("Promise consumed...")
})

new Promise(function(resolve, reject){
    setTimeout(()=>{
        console.log("Async task 2 completed....")
        resolve()
    }, 1000)
}).then(function(){
    console.log("Promise is again consumed....")
})

//chaining multiple then blocks
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username : "ashish", age: 20})//whatever parameter is passed is also passed in the then
    }, 1000)
})

promiseThree
.then((user)=>{
    return user
})
.then((user)=>{//pass the result from the previous then to the next --> promise chaining
    console.log(`Name is ${user.username}`)
    console.log(`Age is ${user.age}`)
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve("No error has occurred...promise consumed successfully")
        }else{
            reject(new Error("Oops...something went wrong..."))
        }
    },1000)
})

promiseFour.then((message)=>{
    console.log(message)
}).catch((error)=>{
    console.log(error)
})

//if not then--->catch
//if not catch--->finally
const promiseFive =  new Promise(function(resolve, reject){
    setTimeout(function(){
        if(isNaN(NaN)){
            resolve("No error has occurred...promise consumed successfully")
        }else if(NaN === NaN){
            reject(new Error("Oops...something went wrong..."))
        }
    },1000)
})

promiseFive
.then((message)=>{
    console.log(message)
})
.catch((error)=>{
    console.log(error)
}).finally(()=>{
    console.log("Promise consumed or rejected......")
})


//async-await

const promiseSix = new Promise(function(resolve, reject){
    setTimeout(()=>{
        let error = true
        if(error === false){
            resolve("Promise Consumed")
        }else{
            reject("ERR:Something went wrong")
        }
    },2000)
})

//important to wrap it up within a try catch block
//ensures if resolved -- try executes
//if rejected -- throw the associated error
async function consumePromise(){
    try {
        const response = await promiseSix
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}

consumePromise()