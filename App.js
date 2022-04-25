const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption= document.querySelector(".filter-todo");

todoButton.onclick = function(){

    event.preventDefault(); //to stop page from being updated
    const TodoDiv= document.createElement("div");
    TodoDiv.classList.add("todo");
    
    const newTodo= document.createElement("li");
    newTodo.innerText=todoInput.value;
    newTodo.classList.add('todo-item');
    TodoDiv.appendChild(newTodo);

    const completedButton= document.createElement('button');
    completedButton.innerHTML='<i class="fa fa-check"></i>';
    completedButton.classList.add("complete-btn");
    TodoDiv.appendChild(completedButton);
 
    const TrashButton= document.createElement('button');
    TrashButton.innerHTML='<i class="fa fa-trash"></i>';
    TrashButton.classList.add("trash-btn");
    TodoDiv.appendChild(TrashButton);
    
    todoList.appendChild(TodoDiv);
    //clear input vaue

    todoInput.value="";
}

todoList.onclick= function(e){
    const item = e.target;
    if(item.classList[0]==='trash-btn'){
        const todo= item.parentElement;
        todo.classList.add("fall");
        todo.addEventListener('transitionend', function(){
            todo.remove();
        })
    }

    if(item.classList[0]==='complete-btn'){
        const todo= item.parentElement;
        todo.classList.toggle("completed");
    }
}

 filterOption.onclick= function(e){
    const todos= todoList.childNodes;
    todos.forEach(function(todo) {
        switch(e.target.value){
            case "all":  
               todo.style.display="flex";
               break;
            case "completed": 
                if(todo.classList.contains("completed")){
                todo.style.display = "flex";
                }
                else {
                todo.style.display = "none";
                 } 
                 break;
            case "incomplete": 
                if(!todo.classList.contains("completed")){
                    todo.style.display = "flex"; 
                }
                else {
                    todo.style.display = "none";
                     }
                     break;
        }
    });
}