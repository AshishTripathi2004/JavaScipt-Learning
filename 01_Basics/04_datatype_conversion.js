let num="123"
let value_num=Number(num)
console.log(value_num,typeof value_num)

let alpha=""
let value_alpha=Number(alpha)
console.log(value_alpha,typeof value_alpha)

let name="ashish"
let value_name=Number(name)
console.log(value_name,typeof value_name)

/*
String to Number conversions
"33"-->33
""-->0
"123a" or "ashish"-->NaN(not a number)
*/

let boolvalue=true
let num_bool=Number(boolvalue)
console.log(num_bool)

/*
Boolen to Number
true-->1
false-->0
*/

let no_value=null
let num_null=Number(no_value)
console.log(num_null)
let str_null=String(no_value)
console.log(str_null)

/*
null to Number
null-->0
null to String
null-->"null"
*/

let not_defined=undefined
let num_not_defined=Number(not_defined)
console.log(num_not_defined)
let str_not_defined=String(not_defined)
console.log(str_not_defined)

/*
undefined to Number
undefined-->Nan
undefined to String
undefined-->"undefined"
*/

let number=0
let bool_num=Boolean(number)
console.log(bool_num)
number=2
bool_num=Boolean(number)
console.log(bool_num)

let string=""
bool_num=Boolean(string)
console.log(bool_num)
string="abc"
bool_num=Boolean(string)
console.log(bool_num)

/*
Number to Boolean
0-->false
1,2,3...->true
-1,-2,-3...->true
String to Boolean
""-->false
"hello"-->true
*/


