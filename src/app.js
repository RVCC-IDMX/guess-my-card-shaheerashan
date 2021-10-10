/* eslint-disable no-restricted-globals */
/* eslint-disable no-alert */
/* eslint-disable no-undef */
/* eslint-disable import/named */
/* eslint-disable no-unused-vars */

/* app.js */

/*
  DO NOT FORGET
Edit random.js so getRandomInt(max)
will return a random number from
0 to the value of max (inclusively)

*/
import getRandomInt from './random';
import './style.css';

const farewell = document.querySelector('.farewell');
const suits = ['hearts', 'spades', 'diamonds', 'clubs'];

while (confirm('Would you like to play this game?')) {
  const actualSuit = suits[getRandomInt(0, 4)];
  const answer = prompt(
    'What suit is my card - Hearts, Spades, Diamonds, or Clubs?'
  );
  if (answer === actualSuit) {
    alert(`Yeah, you won! The answer was ... ${actualSuit}`);
  } else {
    alert(`Sorry, the answer was ... ${actualSuit}`);
  }
}

farewell.innerHTML = '<h1>Thanks for playing!<h1>';
