/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 50 points on GLOBAL score wins the game

*/

/* global variables */
let scores = [0,0];
let rndScore = 0;
let activePlayer = 0;


//let x = document.querySelector('#score-0').textContent; //read score and store


document.querySelector('.dice').style.display = 'none';
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

//event listener rolldice
document.querySelector('.btn-roll').addEventListener('click', function(){
  //1 random number
  let dice = Math.floor(Math.random() * 6) + 1;
  //2 display result
  let diceDom = document.querySelector('.dice');
  diceDom.style.display = 'block';
  diceDom.src = 'img/dice-' + dice + '.png';
  //3 update round score if the rolled number is one
  if(dice !== 1) {
    //add Score
    rndScore += dice;
    document.querySelector('#current-' + activePlayer).textContent = rndScore;
  }else{
    //next player activePlayer changes
    nextPlayer();
  }

});

document.querySelector('.btn-hold').addEventListener('click', function(){
//add current score to global scores
scores[activePlayer] += rndScore;
//update UI
document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

//check player won the game
if(scores[activePlayer] >= 10){
  document.querySelector('#name-' + activePlayer).textContent = "Winner!!";
  document.querySelector('.dice').style.display = "none";
  document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
  document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
}else {
  //next player
  nextPlayer();

}

});

function nextPlayer() {
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  rndScore = 0;
  // resets scores when 1 is obtained in the score area
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';
  //add active Class to panels
  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');
  //hide dice
  document.querySelector('.dice').style.display = "none";

}
