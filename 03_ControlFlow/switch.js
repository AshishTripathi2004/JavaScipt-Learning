"use strict";

let month = 3;

switch (month) {
    case 1:
        console.log("January");
        break;//without break statement--->all other cases will also be executed except default case
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("August");
        break;
    case 9:
        console.log("September");
        break;
    case 10:
        console.log("October");
        break;
    case 11:
        console.log("November");
        break;
    case 12:
        console.log("December");
        break;
    default:
        console.log("Invalid month");

}

let alpha = 'a';

switch (alpha) {
    case 'a':
        console.log('A');
        break;
    case 'b':
        console.log('B');
        break;
    case 'c':
        console.log('C');
        break;
    case 'd':
        console.log('D');
        break;
    case 'e':
        console.log('E');
        break;
    // Add more cases as needed
    default:
        console.log('Not a recognized letter');
}



