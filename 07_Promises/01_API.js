
const requestURL = "https://randomuser.me/api/"
const xhr = new XMLHttpRequest()
console.log(xhr.readyState)//open not yet called
xhr.open('GET', requestURL)
console.log(xhr.readyState)//gives 1 if in ready-state
xhr.onreadystatechange = function(){
    if(xhr.readyState === 4){
        //responseText refers to the data recieved from the api
        //by default in string format
        //should be parsed into an object using JSON
        //object to string is converted using stringify
        //used for storing in the local storage
        const data = JSON.parse(this.responseText)
        console.log(data.results[0].location.country)
        console.log(data.results[0].location.city)
    }
}
xhr.send()
console.log(xhr.readyState)