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
const multiplyButton = document.getElementById('multiply');
const divideButton = document.getElementById('divide');

const submitButton = document.getElementById('submit');

let operation = '+';

plusButton.onclick = function () {
  operation = '+';
  console.log('operation:', operation);
};
minusButton.onclick = function () {
  operation = '-';
  console.log('operation:', operation);
};
multiplyButton.onclick = function () {
  operation = '*';
  console.log('operation:', operation);
};
divideButton.onclick = function () {
  operation = '/';
  console.log('operation:', operation);
};

submitButton.onclick = function () {
  switch (operation) {
    case '+':
      printResult();
      break;
    case '-':
      printResult();
      break;
    case '*':
      printResult();
      break;
    case '/':
      printResult();
      break;
    default:
      console.log('invalid input');
  }
};

function printResult() {
  const sum = computeAction(operation);
  resultColour(sum);
  resultElement.textContent = sum;
}

function resultColour(result) {
  if (result < 0) {
    resultElement.style.color = 'red';
  } else if (result > 0) resultElement.style.color = 'blue';
  else resultElement.style.color = 'green';
}

function computeAction(operation) {
  let sum;
  switch (operation) {
    case '+':
      return (sum = Number(input1.value) + Number(input2.value));
    case '-':
      return (sum = Number(input1.value) - Number(input2.value));
    case '*':
      return (sum = Number(input1.value) * Number(input2.value));
    case '/':
      return (sum = Number(input1.value) / Number(input2.value));
    default:
      console.log('unknown operation');
  }
}
