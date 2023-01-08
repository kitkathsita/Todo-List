import { allTask } from "./todo"
import moment from "moment"
import { createHTML } from "./todo"
import { closeInfo } from './taskinfo'
import { openInfo } from './taskinfo'
import { openForm } from "."
import { closeForm } from "."
import { printer } from "."

const currentDate = moment()
const cont = document.querySelector('.content')
/* const currentDate = new Date() */

function print() {
  if (this.id==='Today') {
    const todayTask = allTask.filter(function(dayTask) {
      const taskDate = dayTask.date
      const dateOfTask = new Date(taskDate)

      if (moment(dateOfTask).format('L')===currentDate.format('L') ) {
        return dayTask
      }
    })
    cont.innerHTML = `<div id="titleTasks">
        <div id="titleTask">${this.id}</div>
      </div>`
    for(let i = 0; i < todayTask.length; i++) {
      createHTML(todayTask[i])
    }
  } 
  
  else if (this.id==='Month') {
    const todayTask = allTask.filter(function(dayTask) {
      const taskDate = dayTask.date
      const dateOfTask = new Date(taskDate)

      if (moment(dateOfTask).format('YYYY MM')===currentDate.format('YYYY MM') ) {
        return dayTask
      }
    })
    cont.innerHTML = `<div id="titleTasks">
        <div id="titleTask">${this.id}</div>
      </div>`
    for(let i = 0; i < todayTask.length; i++) {
      createHTML(todayTask[i])
    }
  }

  else if (this.id==='Year') {
    const todayTask = allTask.filter(function(dayTask) {
      const taskDate = dayTask.date
      const dateOfTask = new Date(taskDate)

      if (moment(dateOfTask).format('YYYY')===currentDate.format('YYYY') ) {
        return dayTask
      }
    })
    cont.innerHTML = `<div id="titleTasks">
        <div id="titleTask">${this.id}</div>
      </div>`
    for(let i = 0; i < todayTask.length; i++) {
      createHTML(todayTask[i])
    }
  }

  else if (this.id==='Done') {
    const todayTask = allTask.filter(function(dayTask) {
      if (dayTask.status==='completed') {
        return dayTask
      }
    })
    cont.innerHTML = `<div id="titleTasks">
        <div id="titleTask">${this.id}</div>
      </div>`
    for(let i = 0; i < todayTask.length; i++) {
      createHTML(todayTask[i])
    }
  }

  else {
    cont.innerHTML = `<div id="titleTasks">
        <div id="titleTask">${this.id}</div>
        <div id="newTask">New task</div>
      </div>`
    for(let i = 0; i < allTask.length; i++) {
      createHTML(allTask[i])
    }
    const addTaskButton = document.getElementById('newTask')
    const cancelButton = document.getElementById('cancel')
    const addButton = document.querySelector('.form-container')

    addTaskButton.addEventListener('click', openForm)
    cancelButton.addEventListener('click', closeForm)
    addButton.addEventListener('submit', (e) => {
      e.preventDefault()
      createToDo(title.value, info.value, date.value, priority.value, 'pending')
      closeForm()
    })
  }

  const taskDiv = document.querySelectorAll('.task')
  const closebutton = document.getElementById('closeButton')
  const editButton = document.querySelectorAll('.getinfo')

  taskDiv.forEach(task => task.addEventListener('click', openInfo))
  closebutton.addEventListener('click', closeInfo)

  editButton.forEach(info => info.addEventListener('click', printer))
}


export default print