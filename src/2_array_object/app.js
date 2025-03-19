/*
const array = [1, 2, 3, 5, 20, 42];
const arrayStrings = [1, 2, 3, 'a', 'b', null, 42];
const array1 = new Array(1, 2, 3, 5, 20, 42);

console.log(array.length);
console.log(array[array.length - 1]);
array[0] = "bread";
console.log(array)

array[array.length] = "ku"
console.log(array)*/

const inputElement = document.getElementById('title');
const createButton = document.getElementById('create');
const listElement = document.getElementById('list');

// const notes = ['записать', 'рассказать'];

// function render() {
//   for (let i = 0; i < notes.length; i++) {
//     listElement.insertAdjacentHTML('beforeend', getNoteTemplate(notes[i]));
//   }
// }

createButton.onclick = function () {
  if (inputElement.value.length === 0) return;

  const newNote = {
    title: inputElement.value,
    completed: false,
  };
  notes.push(newNote);
  render();
  inputElement.value = '';
};

listElement.onclick = function (event) {
  if (event.target.dataset.index) {
    const index = parseInt(event.target.dataset.index);
    const type = event.target.dataset.type;

    switch (type) {
      case 'toggle':
        notes[index].completed = !notes[index].completed;
        break;
      case 'remove':
        notes.splice(index, 1);
        break;
    }
    render();
  }
};

function getNoteTemplate(note, index) {
  return `<li
            class="list-group-item d-flex justify-content-between align-items-center">
            <span class="${note.completed ? 'text-decoration-line-through' : ''}">${note.title}</span>
            <span>
              <span class="btn btn-small btn-${
                note.completed ? 'secondary' : 'success'
              }"
              data-index="${index}"
              data-type="toggle">&check;</span>
              <span class="btn btn-small btn-danger"
              data-index="${index}"
              data-type="remove">&times;</span>
            </span>
        </li>`;
}

/*const person = {
  name: 'ewepu',
  surname: 'col',
  age: 19,
  male: true,
  languages: ['ru', 'en'],
  getFullName: function () {
    console.log(person.name, person.surname);
  },
};
console.log(person.age);
console.log(person['languages']);
const key = 'male';
console.log(person[key]);
person.getFullName();*/

const notes = [
  {
    title: 'записать бебру',
    completed: false,
  },
  {
    title: 'рассказать сказку',
    completed: true,
  },
];

function render() {
  listElement.innerHTML = '';
  if (notes.length === 0) {
    listElement.innerHTML = '<p>Добавьте новую заметку</p>'
  }
  for (let i = 0; i < notes.length; i++) {
    listElement.insertAdjacentHTML('beforeend', getNoteTemplate(notes[i], i));
  }
}

render();
