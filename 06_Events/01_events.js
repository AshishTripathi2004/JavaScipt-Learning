const bird = document.querySelector("#bird")

//false --> indicates event bubbling as the phenomenon for event propagation
bird.addEventListener('click', function (e) {
    const time = e.timeStamp
    console.log(`Last Clicked at : ${time}`)
}, false)


//formatted time in 24hrs format using the date datatype
const food = document.getElementById("food")
food.addEventListener('dblclick', function (e) {
    const time = new Date()
    const hrs = time.getHours()
    const mins = time.getMinutes()
    const secs = time.getSeconds()

    const formatted_time = `${hrs}:${mins}:${secs}`
    console.log(`Last Clicked at : ${formatted_time}`)
    e.stopPropagation()
}, false)

//stop propagation for the click event as well
food.addEventListener("click", function(e) {
    e.stopPropagation();  // Stops click event from reaching <ul>
}, false);

//obtaining the dimensions of the image at the time
//screenX, screenY --> position of the object wrt screen
//view --> window object where event has occurred
//offsetHeight, offsetWidth --> to get the dimensions of the image including the borders
//clientHeight, clientWidht --> excludes any border if any
const elephant = document.querySelector("#elephant")
elephant.addEventListener('click', (e) => {

    const x = e.screenX
    const y = e.screenY

    const v = e.view

    console.log(`The position is : { ${x} , ${y} }`)
    console.log(v)

    setTimeout(() => {
        const h = e.target.offsetHeight;
        const w = e.target.offsetWidth;   // or elephant.offsetWidth
        console.log(`The dimensions of the image are : { ${h} , ${w} }`);
    }, 1000)

}, false)

document.addEventListener("keydown", function (e) {
    if (e.ctrlKey && (e.key === 'a' || e.key === 'A')) {
        console.log("CTRL + A is pressed")
        e.preventDefault()
        return
    }
}, false)

//Event bubbling
//inner to outer element in the html document

const ul = document.querySelector("ul")

ul.addEventListener("click", function(e){
    console.log("list is clicked")
},false)

//Event Capturing
//outer to inner element in the html document
//parameter passed is true
//stopPropagation() --> prevent event bubbling or capturing





