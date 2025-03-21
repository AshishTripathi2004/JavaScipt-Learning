
//executing setTimeout and clearTimeout
//not a part of core JS
//but allow asynchronous JS 

function changeTitle(){
    const elem = document.querySelector("#heading-1")
    elem.innerHTML = `This is the changed title...`
    console.log("Title changed....")
}
const titButton = document.querySelector("#title")
titButton.addEventListener("click", function(e){
    clearTimeout(change)
    console.log("Stopped Successfully...")
})

//pass a callback to the function
//save the reference in-case we need to abort it using clear timeout
const change = setTimeout( changeTitle , 2000)


//understanding setInterval function
var counter = 1

function printCounter(){
    console.log(`Call no. : ${counter}`)
    counter = counter + 1  
}

var start
const stButton =  document.querySelector("#start")
stButton.addEventListener('click', function(){
    start = setInterval(printCounter, 1000)
})

const button = document.querySelector("#stop")
button.addEventListener("click", function(e){
    clearInterval(start)
    console.log(`Time elapsed : ${counter - 1}`)
    counter = 1
})




