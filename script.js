//TO select elements
const form = document.getElementById('todoform');
const form = todoInput = document.getElementById('todoform');

let todos = [];

//submit form
form.addEventListener('submit', function (event) {
  event.preventDefault()

  saveToDo();

});

// Save todo
function saveToDo() {
  const todoValue = todoInput.value,

  //check if ToDo is empty
  const isEmpty = todoValue === '';

  //check for duplicate todos
  const isDuplicate = todos.some((todo)=> todo.value.toUpperCase() === todoValue.toUpperCase());

  if(isEmpty){
    alert("You're not allwed to do nothing! To do is empty")
  } else if (isDuplicate) {
    alert ('Todo already exists!')
  } else {
    todos.push ({
      value : todoValue,
      checked : false,
      color : '#' + Math.floor(Math.random()*16777215).toString(16)
    });
    todoInput.value = '';
  }
}