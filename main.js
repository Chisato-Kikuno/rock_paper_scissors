'use strict';

// 画像と配列の定義
const rockPaperScissors = ['グー', 'チョキ', 'パー']
const imagePaths = {
  'グー': 'images/グー.PNG',
  'チョキ': 'images/チョキ.PNG',
  'パー': 'images/パー.PNG',
};
const resultImages = {
  '勝ち': 'images/勝ち.PNG',
  '負け': 'images/負け.PNG',
  'あいこ': 'images/じゃんけん.PNG'
};

// 結果によって表示がかわるコンテンツの定義
const images = document.getElementById('images');
const yourChoice = document.getElementById('yourChoice');
const resultImg = document.getElementById('resultImg');
const retry = document.getElementById('retry');

const playGame = (playerhands) => {
  // 自分が出した手を表示
  yourChoice.textContent = `あなたが出したのは${playerhands}です!`;

  // コンピューターの手を決定、画像を変更
  const index = Math.floor(Math.random() * rockPaperScissors.length);
  const hands = rockPaperScissors[index];

  images.src = imagePaths[hands];

  //勝敗の決定
  let result = '';
  if(playerhands === hands) {
    result = 'あいこ';
    resultImg.src = resultImages['あいこ'];
    resultImg.style.display = 'block';
    retry.textContent = 'あいこなのでもう一度選択してください!';
    retry.style.display = 'block';
  } else if ( 
    (playerhands === 'グー' && hands === 'チョキ') ||
    (playerhands === 'チョキ' && hands === 'パー') ||
    (playerhands === 'パー' && hands === 'グー')
  ){
    result = '勝ち';
    resultImg.src = resultImages['勝ち'];
    resultImg.style.display = 'block';
    retry.style.display = 'none';
  } else {
    result = '負け';
    resultImg.src = resultImages['負け'];
    resultImg.style.display = 'block';
    retry.style.display = 'none';
    }
};

document.getElementById('rock').addEventListener('click', () => playGame('グー'));
document.getElementById('scissors').addEventListener('click', () => playGame('チョキ'));
document.getElementById('paper').addEventListener('click', () => playGame('パー'));
