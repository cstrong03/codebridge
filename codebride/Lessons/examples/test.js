const synonyms = ['fantastic', 'wonderful', 'great'];
const greetings = [];

for(let i = 0; i < synonyms.length; i++){
  greetings.push('Have a '+ synonyms[i] + ' day!');
}

for (let i = 0; i < greetings.length; i++) {
    console.log(greetings[i]);
  }
