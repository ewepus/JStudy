/*
let bum = 42;
let name = 'ewepu';
const isBobby = true;
let sdf = bum.toExponential();

alert(name)
console.log(bum, name, isBobby);
console.log(sdf);

const resultElement = document.getElementById('increaseByOne');
let input1 = document.getElementById('increaseByOne');
let input2 = document.getElementById('decreaseByOne');
resultElement.textContent = String(Number(input1.textContent) + Number(input2.textContent));
*/

const resultElement = document.getElementById('result');
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const plusButton = document.getElementById('plus');
const minusButton = document.getElementById('minus');
const submitButton = document.getElementById('submit');

let isPlus = true;

plusButton.onclick = function () {
  isPlus = true;
  console.log('isPlus:', isPlus);
};
minusButton.onclick = function () {
  isPlus = false;
  console.log('isPlus:', isPlus);
};
submitButton.onclick = function () {
  if (isPlus)
    resultElement.textContent = Number(input1.value) + Number(input2.value);
  else resultElement.textContent = Number(input1.value) - Number(input2.value);
};
