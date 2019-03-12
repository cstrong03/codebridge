1.
for (let i = 0; i <= 20; i++){
  if (i % 2 === 0) {
    console.log(i * 3);
  }
  else if (i % 3 === 0) {
    console.log(i + 3)
  }
  else {
    console.log(i);
  }
}

2.
for (let i = 0; i <= 20; i++) {
  if (i % 2 !== 0 && i % 3 !== 0) {
    console.log(i);
  }
}

3.
for (let i = 0; i <= 50; i++) {
  if (i % 10 === 0) {
    console.log('I am the 10th iteration');
  }
  else if (i % 5 === 0) {
    console.log('I am the 5th iteration')
  }
  else {
    console.log(i);
  }
}

4.
for (let i = 0; i <= 10 ; i++) {
  if (i % 2 === 0) {
    console.log('Even' );
  }
  else if (i % 3 === 0) {
    console.log('Odd');
  }
  else {
    console.log('Prime');
  }
}

5.
let dollars = 40;
let amount = 16;
let change = dollars - amount;
for (let i = 0; i < 1; i++) {
  console.log(change);
}
