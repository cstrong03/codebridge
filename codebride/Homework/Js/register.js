
let register = (paid,cost) => {
  let amount = paid - cost;
  for (let i = amount; i >= 0 ;) {
    console.log(amount);
  		 if (i >= 100){
            console.log('$100');
            i -= 100;           
        }else if (i >= 50){
            console.log('$50');
            i -= 50;      
        }else if (i >= 20){
            console.log('$20');
            i -= 20; 
        }else if (i >= 10){
            console.log('$10');
            i -= 10; 
        }else if (i >= 5){
            console.log('$5');
            i -= 5; 
        }else if (i >= 1){
            console.log('$1');
            i -= 1;
        }else if (i >= 0.25){
            console.log('25c');
            i -= .25; 
        }else if (i >= 0.10){
            console.log('10c');
            i -= .10; 
        }else if (i >= 0.05){
            console.log('5c');
            i -= 0.05; 
        }else {
            console.log('1c');
            i -=  0.01; 
  	}
  }
}
register(27.81, 100);