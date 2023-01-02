import './style.css'

const addTaskButton = document.getElementById('newTask')
const cancelButton = document.getElementById('cancel')

function openForm() {
  document.getElementById("window").style.display = "block";
}

function closeForm() {
  document.getElementById("window").style.display = "none";
}

addTaskButton.addEventListener('click', openForm)
cancelButton.addEventListener('click', closeForm)