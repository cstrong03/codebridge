// let i;
// for(i = 1; i <= 9; i += 2){
//   console.log(i);
// }

// for(i = 2; i <= 10; i += 2){
//   console.log(i);
// }


// for(let i = 0; i <= ; i++){
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }


for(let i = 1; i < 100; i++){
  if(i % 3 == 0 && i % 5 == 0) {
    console.log('FizzBuzz');
  }
    else if(i % 3 == 0) {
      console.log('Buzz');
    }
    else if (i % 5 == 0) {
      console.log('FizzBuzz');
    }
    else {
      console.log(i);
    }
}
