var input = document.querySelector("#input");
var div = document.querySelector("ol");
var global_array = [];

function todoApp(){
    
    div.innerHTML = "";
    global_array.push(input.value);

    for(var i = 0; i< global_array.length; i++){
        div.innerHTML += `<li>${global_array[i]}<button onclick = "deleteTodo(${i})">Delete</button><button onclick = "editTodo(${i})">Edit</Button></li>`;

    }
    
}
// function AddTask(){
//     div.innerHTML = "";
//     global_array.push(input.value);
// clicks();
// // input.value;
// }

function clears(){
    // div.innerHTML = "";
    input.value = "";
}

// this function will delete todo item from the list
function deleteTodo(i){
    div.innerHTML = "";
    global_array.splice(i,1);
    for(var i = 0; i< global_array.length; i++){
        div.innerHTML += `<li>${global_array[i]}  <button onclick = "deleteTodo(${i})">Delete</button>  <button onclick = "editTodo(${i})">Edit</Button></li>`;

    }
}


// this function will update todo item from the list
function editTodo(i){
    div.innerHTML = "";
    var edit = prompt("please add some values");
    global_array.splice(i,1, edit);
    for(var i = 0; i<global_array.length; i++){
        div.innerHTML += `<li>${global_array[i]} <button onclick = "deleteTodo(${i})">Delete</button> <Button onclick = "editTodo(${i})">Edit</Button></li>`;
        
    }
    
}

