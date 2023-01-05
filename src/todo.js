const title = document.getElementById('task')
const info = document.getElementById('info')
const date = document.getElementById('date')
const priority = document.getElementById('priority')

function print() {
  const task = new Tasks(title.value, info.value, date.value, priority.value)

  const cont = document.querySelector('.content')
  const newTask = document.createElement('div')
  cont.appendChild(newTask)
  newTask.classList.add('task')
  newTask.innerHTML = `<div class="firstPart">
    <div class="check"></div>
    <div>${task.title}</div>
  </div>
  <div class="secondPart">
    <i class="bi bi-trash"></i>
    <i class="bi bi-pencil-square"></i>
  </div>`

}

class Tasks {
  constructor(title, info, date, priority) {
    this.title = title
    this.info = info
    this.date = date
    this.priority = priority
  }
}

export default print