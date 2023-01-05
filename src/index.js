import './style.css'
import print from './todo.js' 

const addTaskButton = document.getElementById('newTask')
const cancelButton = document.getElementById('cancel')
const addButton = document.querySelector('.form-container')

function openForm() {
  document.getElementById("window").style.display = "block";
}

function closeForm() {
  document.getElementById("window").style.display = "none";
}

addTaskButton.addEventListener('click', openForm)
cancelButton.addEventListener('click', closeForm)
addButton.addEventListener('submit', (e) => {
  e.preventDefault()
  print()
  closeForm()
})