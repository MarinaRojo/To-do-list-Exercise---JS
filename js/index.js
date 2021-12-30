const button=document.querySelector('#button');
let list=[];
const todolist=document.querySelector('#todolist');
todolist.innerHTML="<p>No hay tareas</p>";
const handleClick=(event)=>{
    const tarea=document.querySelector('#tarea');
    list.push(tarea.value);
    printToDoList();
};

const printToDoList=()=>{
    let liststr="";
    list.map((tarea,index)=>liststr=liststr + `<li class="list-group-item d-flex justify-content-between align-items-start" > <div class="ms-2 me-auto">${tarea}</div><button class="btn btn-danger col-2" onclick="deleteList(${index})">Eliminar</button></li>`);
    const html=`<ul class="list-group list-group-numbered">${liststr}</ul>`;
    todolist.innerHTML=html;
    if(list.length==0){
      todolist.innerHTML="<p>No hay tareas</p>";
    }
};

const deleteList=(i)=>{
    list=list.filter(function(value, index, arr) {
      return index!=i;
  });
    printToDoList();
};
button.addEventListener("click",handleClick);

