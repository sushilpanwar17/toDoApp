//selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

//event listener
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);


//Functions
function addTodo(event){
    // prevent form fro submitting 
    event.preventDefault();
    // Todo div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
//create LI
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;

    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    //check mark
    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class = "fas fa-check"></i>';
    completedButton.classList.add("complete-btn")
    todoDiv.appendChild(completedButton);

    // In progress
    const inProgressButton = document.createElement("button");
    inProgressButton.innerText = 'Pending';
    inProgressButton.classList.add("inProgress-btn")
    todoDiv.appendChild(inProgressButton);


    //check trash
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class = "fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);


    //append to list
    todoList.appendChild(todoDiv);
    //clear todo input 
    todoInput.value = "";
}

function deleteCheck(e) {
    const item = e.target;
  
    if (item.classList[0] === "trash-btn") {
      // e.target.parentElement.remove();
      const todo = item.parentElement;
      
        todo.remove();
    
    }
    if (item.classList[0] === "inProgress-btn") {
      const todo = item.parentElement;
      todo.classList.toggle("inProgress");
      console.log(todo);
    }

    if (item.classList[0] === "complete-btn") {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
        console.log(todo);
      }
  }