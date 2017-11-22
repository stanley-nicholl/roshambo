const argv = require('yargs').argv

let options = ['rock', 'paper', 'scissors']

let userChoice = argv.move
let computerChoice = options[Math.floor(Math.random() * options.length)]

console.log(`User threw ${userChoice}`);
console.log(`Computer threw ${computerChoice}`);

if(userChoice === 'rock'){
  if(computerChoice === 'rock'){
    console.log("It's a Draw");
  }else if(computerChoice === 'paper'){
    console.log('Computer wins');
  }else{
    console.log('User wins');
  }
}else if (userChoice === 'paper'){
  if(computerChoice === 'rock'){
    console.log("User wins");
  }else if(computerChoice === 'paper'){
    console.log("It's a Draw");
  }else{
    console.log('Computer wins');
  }
}else{
  if(computerChoice === 'rock'){
    console.log("Computer wins");
  }else if(computerChoice === 'paper'){
    console.log('User wins');
  }else{
    console.log("It's a Draw");
  }
}
