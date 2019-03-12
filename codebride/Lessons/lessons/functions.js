// // function insertName() {
// //   add a statement in here like if;
// // }
// //
// // to use function insertName(); Use the name of the function and empty
// parenthess in order to use the statement inside of the function

// function add() {
//   let a = 5;
//   let b = 5;
//   let c = (a + b);
//   console.log(c);
// }
//
// add();

// function plus(a,b,c) {
//   let d = (a + b + c) / 3;
//   return d;
// }
// // console.log(plus(72,5,2));
//
// console.log(Math.floor(plus(72,5,2)));

// for es6 functions use the fat arrow * => *

function multiply(a,b) {
  let c = a * b;
  console.log(c);
}

multiply(7,5);

let multiply = (a,b)=> a * b;
console.log(multiply(7,5));

function divison(a,b){
  let c = a / b;
  console.log(c);
}
divison(100,10);

let divison = (a,b)=> a/b;
console.log(divison(100,10));

function subtraction(a,b){
  let c = a - b;
  console.log(c);
}
subtraction(72,15);

let subtraction =(a,b)=> a-b;
console.log(subtraction(72,15));

// function add(x,y) {
//   let z = x + y;
//   console.log(z);
// }
// add(6,5);

// function plus(a,b,c) {
//   let d = (a + b + c) / 3;
//   return d;
// }
// // console.log(plus(72,5,2));

// console.log(Math.floor(plus(72,5,2)));

// let plus = (a,b,c) => (a + b + c) / 3;
// console.log(plus(72,5,2));
//
// let add = (a,b,c) => a + b + c;
// console.log(add(2,3,3));

// function vending(paid, cost) {
//   let change = paid - cost;
//   for (let i = 0; i < 1; i++) {
//     console.log(change);
//   }
// }
// vending(20,6);

let vending = (paid,cost) => {
  let change = paid - cost;
  for (let i = 0; i < 1; i++) {
    console.log(change)
  }
}
vending(10,2);
vending(10,4);
