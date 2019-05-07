"use strict"
console.log('Привет!');
console.log('Task#1');

function calcBonus(arr) {
  let sum = 0;
  for (let val of arr) {
    sum += val;
  }
  return (sum > 10000)?(Math.round(sum * 0.05)):0;
}

console.log(`Бонус = ${calcBonus([200, 550, 4000, 23, 58, 5000, 485, 711])}`);

console.log('Task#2');
function showBalance (balance) {
  let valTen = balance % 10;
  let valTeen = balance % 100;
  let textVal = 'баллов';
  if(!(valTeen >= 11 && valTeen <= 19)) {
    switch(valTen) {
      case 1: 
        textVal = 'балл';
        break;
      case 2: 
        textVal = 'балла';
        break;
      case 3: 
        textVal = 'балла';
        break;
      case 4: 
        textVal = 'балла';
        break;
    }
  }
  return textVal;
}

[523, 6000, 5001, 5013, 9999].forEach(
  (element) => 
  {console.log(`Ваш баланс: ${element} ${showBalance(element)}`)}
);

console.log('Task#3');
function bestRating (arr) {
  return Math.max.apply(null,arr);
};

function avgTop3(arr) {
  arr.sort().reverse();
  let sum = 0;
  for (let i = 0; i <= 2; i++) {
    sum += arr[i];
  }
  return sum / 3;
}

const gameResults = [74989, 74990, 84990, 62000, 58480, 61800];
console.log(`Самый лучший балл: ${bestRating(gameResults)}`);
console.log(`Средний балл ТОП-3: ${avgTop3(gameResults)}`);
