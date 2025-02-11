/**
 * TERNARY --> three parts
 *   ? :
 * 
 * condition ? do something when true : do something when false
*/


const age = 12;
// const age = 20;
// if (age >= 18) {
//     console.log('you can vote');
// }
// else {
//     console.log('Ghuami Thako');
// }

// simple ternary
// age >= 18 ? console.log('vote dio') : console.log('Ghumai thako')


let price = 500;
const isLeader = true;

if (isLeader === true) {
    price = 0;
}
else {
    price = price + 100;
}
// console.log(price)

price = isLeader === true ? 0 : price + 100;

// OPTIONAL: Semi - advanced ternary


if (isLeader === true) {
    if (price > 1000) {
        price = price / 2;
    }
    else {
        price = 0;
    }
}
else {
    price = price;
}
price = isLeader === true