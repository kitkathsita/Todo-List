import { AllToDo } from "./todo"

function defaultSetUp() {
  AllToDo('My first task', 'This is an example of a task', '2023-08-01', 'Low')
  AllToDo('Today', 'This is an example of a task', '2023-01-05', 'High')
  AllToDo('Month', 'This is an example of a task', '2023-01-17', 'Medium')
  AllToDo('Year', 'This is an example of a task', '2023-08-01', 'Low')
}

export default defaultSetUp