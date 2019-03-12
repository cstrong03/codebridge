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
