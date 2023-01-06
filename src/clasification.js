import { allTask } from "./todo"
import moment from "moment"
import { AllToDo } from "./todo"

const titleClasification = document.getElementById('titleTask')
const currentDate = moment().format('L') 
const cont = document.querySelector('.content')
/* const currentDate = new Date() */

function print() {
  titleClasification.innerHTML = this.id
  console.log(this.id)

  if (this.id==='Today') {
    const todayTask = allTask.filter(function(dayTask) {
      const taskDate = dayTask.date
      const dateOfTask = new Date(taskDate)

      if (moment(dateOfTask).format('L')===currentDate) {
        return dayTask
      }
    })
    for(let i = 0; i < todayTask.length; i++) {
      cont.innerHTML = `<div id="titleTasks">
        <div id="titleTask">${this.id}</div>
      </div>`
      AllToDo(todayTask[i].title, todayTask[i].info, todayTask[i].date, todayTask[i].priority)
    }
  }
}

export default print