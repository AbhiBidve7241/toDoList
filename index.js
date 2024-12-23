let tasks=[];
const addTask=()=>{
    const taskInput=document.getElementById('taskInput');
        const text= taskInput.value.trim();

    if (text){
        tasks.push({text: text,completed: false})
        taskInput.value='';
        updateTaskList();
        updateStats();
    }

};




const toogleTaskComplete=(index)=>{
    tasks[index].completed=!tasks[index].completed;
    updateStats();
};




const deleteTask = (index) =>{
    tasks.splice(index, 1);
    updateTaskList();
    updateStats();
}


const editTask = (index) => {
const taskInput= document.getElementById('taskInput');
taskInput.value= tasks[index].text;

tasks.splice(index,1)
updateTaskList();
updateStats();

};





const updateStats =()=>{
const completeTasks = tasks.filter(task=>task.completed).length;
const totalTasks = tasks.length
const progress= (completeTasks/totalTasks)*100
const progressBar= document.getElementById('progress')
progressBar.style.width= `${progress}%`


document.getElementById('number').innerText=` ${completeTasks}/${totalTasks}`
}

const updateTaskList=()=>{
    const taskList =document.getElementById('task-List');
    taskList.innerHTML='';

    tasks.forEach((task, index) =>{
        const listItem = document.createElement('li')

        listItem.innerHTML = `
         <div class="taskItem">
          <div class="task" ${task.completed ?'completed':'' }>
            <input type="checkBox" class="checkBox" ${task.completed?'checked':""
             }/>
            <p>${task.text}</p>
          </div>
          <div class="icons">
            <img src="edit.png" onClick="editTask(${index})"/>
            <img src="bin.png" onClick="deleteTask(${index})"/>
            </div>
            </div> 
            `;
         

            listItem.addEventListener("change",()=>
                toogleTaskComplete(index));
            
            taskList.append(listItem);
         
        
        
        
    });
}

document.getElementById('newTask').addEventListener('click',function(e)
{
    e.preventDefault();
    

    addTask();
})