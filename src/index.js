import './style.css'
import defaultSetUp from './default.js'
import print from './clasification'
import { createToDo } from './todo.js'
import { closeInfo } from './taskinfo'
import { openInfo } from './taskinfo'

const addTaskButton = document.getElementById('newTask')
const cancelButton = document.getElementById('cancel')
const addButton = document.querySelector('.form-container')
const clasification = document.querySelectorAll('.option')

const title = document.getElementById('tasks')
const info = document.getElementById('info')
const date = document.getElementById('date')
const priority = document.getElementById('priority')

function openForm() {
  document.getElementById("window").style.display = "block";
}

function closeForm() {
  document.getElementById("window").style.display = "none";
}

defaultSetUp()

addTaskButton.addEventListener('click', openForm)
cancelButton.addEventListener('click', closeForm)
addButton.addEventListener('submit', (e) => {
  e.preventDefault()
  createToDo(title.value, info.value, date.value, priority.value, 'pending')
  closeForm()
})

clasification.forEach(clasify => clasify.addEventListener('click', print))

const taskDiv = document.querySelectorAll('.task')
const closebutton = document.getElementById('closeButton')

taskDiv.forEach(task => task.addEventListener('click', openInfo))
closebutton.addEventListener('click', closeInfo)

const editButton = document.querySelectorAll('.getinfo')

function printer(event) {
  console.log('hello')
  event.stopPropagation()
}

editButton.forEach(info => info.addEventListener('click', printer))

export {openForm, closeForm, printer}