// const names = ['Алексей', 'Клим', 'Елизавета', 'Мактрахер'];
/*
names.push('d'); // добавить в конец
names.unshift('o'); //добавить в начало

const firstName = names.shift(); //удалить из начала
const lastName = names.pop(); //удалить с конца

console.log(names.reverse()); //перевернуть массив (изменяя изначальный)
console.log(names.toReversed()); //перевернуть не изменяя изначальный
console.log(names.sort()); //сортируем и меняем
console.log(names.toSorted()); //сортируем не меняем
console.log(names.splice(0,1)) //удаляет н элементов начиная с индекса, возравщает их и меняет массив
console.log(names.toSpliced(0,1)) //не меняет массив

const index = names.indexOf('Клим'); //найти индекс элемента
const newNames = names.with(index, 'Климат') //скопировать массив и заменить элемент с индексом на новый

console.log(names, firstName, lastName);
console.log(newNames);

const capitalNames = names.map(function
  (name,index) {
  if (index === 1) {
    return 'Лёха'
  }
  return name;
});
//мап не изменяет исходный массив
console.log(names.includes('d')); //true or false
console.log(names.indexOf('Клим') !== -1);
console.log(capitalNames);
console.log(names);*/
const people = [
  { name: 'Алексей', budget: 1000 },
  { name: 'Клим', budget: 45153 },
  { name: 'Елизавета', budget: 23512 },
  { name: 'Мактрахер', budget: 235 },
];

/*
let foundPerson = [];
for (let person of people) {
  if (person.budget % 2 === 0) {
    foundPerson.push(person);
  }
}
console.log(foundPerson);*/

/*const found = people.find(function (person) {
  return person.budget === 235;
});

const found = people.findIndex(function
  (person) {
  return person.budget === 235;
});

const found = people.find((p) => p.budget === 235);
console.log(found);*/

/*let sumOfBudgets = 0;
const filtered = people.filter(function
  (p) {
  return p.budget > 5000;
});
console.log(filtered);

filtered.forEach(function(person) {
  sumOfBudgets += person.budget;
})
console.log(sumOfBudgets)*/

/*const byBudget = (p) => p.budget > 5000;
const pickBudget = (p) => p.budget;

const sumOfBudgets = people
  .filter(byBudget)
  .map(pickBudget)
  .reduce((accumulator, p) => accumulator + p, 0);

console.log(sumOfBudgets);*/

const string = 'Палиндром';
const reversedString = string
  .split('')
  .toReversed()
  .join('!')
  .split('')
  .filter((c) => c !== '!')
  .join('');
console.log(reversedString);
