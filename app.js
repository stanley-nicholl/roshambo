const argv = require('yargs').argv

class Game {
  constructor(players =[]){
    this.players = players
  }

  addPlayer(player){
    this.players.push(player)
  }

  play(){
    let player1Choice = this.players[0].move
    let player2Choice = this.players[1].move
    console.log(`${this.players[0].type} threw ${player1Choice}`);
    console.log(`${this.players[1].type} threw ${player2Choice}`);

    if(player1Choice === 'rock'){
      if(player2Choice === 'rock'){
        console.log("It's a Draw");
      }else if(player2Choice === 'paper'){
        console.log(`${this.players[1].type} wins`);
      }else{
        console.log(`${this.players[0].type} wins`);
      }
    }else if (player1Choice === 'paper'){
      if(player2Choice === 'rock'){
        console.log(`${this.players[0].type} wins`);
      }else if(player2Choice === 'paper'){
        console.log("It's a Draw");
      }else{
        console.log(`${this.players[1].type} wins`);
      }
    }else{
      if(player2Choice === 'rock'){
        console.log(`${this.players[1].type} wins`);
      }else if(player2Choice === 'paper'){
        console.log(`${this.players[0].type} wins`);
      }else{
        console.log("It's a Draw");
      }
    }
  }
}

class Player {
  constructor(type){
    this.type = type
    this._move = null
  }

  get move () {
    let options = ['rock', 'paper', 'scissors']
    return this._move || options[Math.floor(Math.random() * options.length)]
  }

  set move(input){
    this._move = input
  }

}

var human = new Player('human')
var cpu = new Player('robot')
var game = new Game()
human.move = argv.move
game.addPlayer(cpu)
game.addPlayer(human)
game.play()
