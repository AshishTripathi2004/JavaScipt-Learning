//IIFE:Immediately Invoked Function Expressions
//used to prevent pollution from global scope variables

//named IIFE
//can be immediately invoked after declaration and definition
//is not automatically terminated--->semi-colon must be used
(function printOne(){
    console.log(1)
})();

//using the arrow function ()=>{}
(()=>{
    console.log(1)
})();//always terminate with a semicolon

//parameterised IIFE
((name)=>{
    console.log(`Name is ${name}`)
})("Ashish");

