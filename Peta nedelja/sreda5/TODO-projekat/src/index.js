const mainDiv = document.querySelector('#mainDiv');
const itemDiv = document.querySelector('.itemDiv');

const deleteBtn = document.querySelector('#deleteBtn')
const textArea = document.querySelector('#textarea')
const btnSubmit = document.querySelector('#submit')

const data = [
    {
      id: 0,
      desc: "sdfkjgdg",
      done: true,
    },
    {
      id: 1,
      desc: "1231",
      done: true,
    },
    {
      id: 2,
      desc: "12312",
      done: false,
    },
    {
      id: 3,
      desc: "sdf2123",
      done: true,
    },
    {
      id: 4,
      desc: "sdfkdsfsfdsjgdg",
      done: true,
    },
    {
      id: 5,
      desc: "sdfsfsdfsdfsdfkjgdg",
      done: true,
    },
  ];

const addToMainDiv = newItem => {
    const addItem = document.createElement('div')
    addItem.className = 'itemDiv'
    addItem.innerHTML = `
        <h3>Opis</h3>
        <p>Opis sta treba uradit</p>
        <input type="checkbox" name="" id="cekBox">
        <button id="deleteBtn">Obrisati stavku</button>
    `
    mainDiv.appendChild(addToMainDiv)
}

btnSubmit.addEventListener('click', () => {
    const textArea = document.querySelector('#textarea')
})