//fetch()
//global method
//initiates the process of fetching resouces from a network
//a successor to XMLHttpRequest
//returns a new promise

fetch("https://randomuser.me/api/")
.then((data)=>{
    return data.json()
})
.then((obj)=>{
    console.log(obj)
})
.catch((error)=>{
    console.log(error)
})

/*
A fetch() promise only rejects when the request fails, for example, because of a badly-formed request URL or a network error. A fetch() promise does not reject if the server responds with HTTP status codes that indicate errors (404, 504, etc.). Instead, a then() handler must check the Response.ok and/or Response.status properties.
*/

/*

fetch() in the event loop:
    --fetch() requests are placed in the high-priority queue MICROTASKS QUEUE
    --more priority than any callback in the TASKS QUEUE
*/