function createToDo(title, info, date, priority, status) {
  const task = new Tasks(title, info, date, priority, status)

  allTasks(task)
  createHTML(task)

}

function createHTML(task) {
  const cont = document.querySelector('.content')
  const newTask = document.createElement('div')
  cont.appendChild(newTask)
  newTask.classList.add('task')
  newTask.classList.add(task.priority)
  newTask.innerHTML = `<div class="firstPart">
    <div class="check"></div>
    <div>${task.title}</div>
  </div>
  <div class="secondPart">
    <i class="bi bi-trash"></i>
    <i class="bi bi-pencil-square"></i>
  </div>`
}

const allTask = []

function allTasks(task) {
  allTask.push(task)

}

class Tasks {
  constructor(title, info, date, priority, status) {
    this.title = title
    this.info = info
    this.date = date + 'T10:00:00-0500'
    this.priority = priority
    this.status = status
  }
}

export {createToDo, allTask, createHTML}