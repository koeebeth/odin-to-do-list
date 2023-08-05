import * as storage from './storage.js';
import {format} from 'date-fns'

const tasksDiv =  document.querySelector("#tasks");

const clearTaskDiv = function(){
    tasksDiv.innerHTML = ''
}

function renderTask(task){
    const taskDiv = document.createElement('div');
    taskDiv.classList.add('task');
    taskDiv.dataset.taskId = task.id;

    const taskHeader = document.createElement('h3');
    taskHeader.classList.add('task-title');
    taskHeader.textContent = task.title;

    const project = document.createElement('h4');
    project.classList.add('task-project')
    if(task.project){
        project.textContent = `Project: ${task.project}`
    }
    else{
        project.textContent = "No project"
    }

    const details = document.createElement('p');
    details.classList.add('details')
    if(task.details){
        details.textContent = task.details;
    }
    else{
        details.textContent = "No details"
    }

    const dueDate = document.createElement('h3');
    dueDate.classList.add('duedate');
    if(task.dueDate){
        const date = format(task.dueDate, "PPPP")
        dueDate.textContent = `Due to: ${date}`
    }
    else{
        dueDate.textContent = "No date"
    }

    const check = document.createElement('input');
    check.classList.add('check');
    check.setAttribute('type', 'checkbox')
    if (task.isDone) {
        check.checked = true;
        taskDiv.classList.add('done');
    }
    check.dataset.taskId = task.id;
    check.addEventListener('input', (e) => {
        const parentDiv = e.currentTarget.parentElement;
        const id = e.currentTarget.dataset.taskId;
        storage.taskList.checkTask(id);
        parentDiv.classList.toggle('done');
    })

    if(task.priority){
        taskDiv.dataset.priority = task.priority;
    }

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "x"
    deleteBtn.classList.add('delete');
    deleteBtn.setAttribute("type", "button");
    deleteBtn.addEventListener('click', (e) => {
        const id = e.currentTarget.parentElement.dataset.taskId;
        storage.taskList.deleteTask(id);
        location.reload();
    })

    taskDiv.appendChild(taskHeader);
    taskDiv.appendChild(project);
    taskDiv.appendChild(details);
    taskDiv.appendChild(dueDate);
    taskDiv.appendChild(check);
    taskDiv.appendChild(deleteBtn);

    return taskDiv;
}

function sortByProject(projectName) {
    const allTasks = storage.taskList.getAllTasks();

    let projectTasks = [];
    for(const task of allTasks){
    if(task.project == projectName){
        projectTasks.push(task);
    }
    if(task.project == "" && projectName == "Unsorted"){
        projectTasks.push(task);
        }
    }
    return projectTasks;
}

function displayTasks(tasks) {
    clearTaskDiv()
    for (const task of tasks){
        if(task){
            const newTask = renderTask(task)
            tasksDiv.appendChild(newTask);
        }
    }
}

export {renderTask, clearTaskDiv, displayTasks, sortByProject};