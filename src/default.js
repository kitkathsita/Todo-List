import { createToDo } from "./todo"

function defaultSetUp() {
  createToDo('My first task', 'This is an example of a task', '2023-08-01', 'Low', 'pending')
  createToDo('Today', 'This is an example of a task', '2023-01-05', 'High', 'pending')
  createToDo('Month', 'This is an example of a task', '2023-01-17', 'Medium', 'completed')
  createToDo('Year', 'This is an example of a task', '2023-08-01', 'Low', 'pending')
}

export default defaultSetUp