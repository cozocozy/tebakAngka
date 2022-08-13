'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').value = secretNumber;
let highScore = 0;
let score = 20;

const displayMassage = message => {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  //no input
  if (!guess) {
    // document.querySelector('.message').textContent = 'Angka Kosong..';
    displayMassage('Angka Kosong..');
  }
  // player win
  else if (guess === secretNumber) {
    document.querySelector('.score').textContent = score;
    // document.querySelector('.message').textContent = 'Jawaban Benar!!';
    displayMassage('Jawaban Benar..');
    //change bg color
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMassage(
        guess > secretNumber ? 'Angka Ketinggian !!' : 'Angka Kekecilan..'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMassage('Kamu Kalah !!');
      document.querySelector('.score').textContent = 0;
    }
  }
  //     document.querySelector('.message').textContent = 'Angka ketinggian!!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'Kamu Kalah..';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }

  // else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Angka Kekecilan!!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'Kamu Kalah!!';
  //     score--;
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', () => {
  const secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = '20';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
});
