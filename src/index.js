import * as storage from './modules/storage.js';
import * as taskMod from './modules/taskmodule.js';
import * as DOMHelpers from './modules/helpers.js';
import './style.css';


const DOMManipulator = (function(){
    const contentDiv = document.querySelector('div#content')

    const setPage = function(){
        //New Task Popup
        const formDiv = document.querySelector('div.new-task');
        const formBtn = document.querySelector('button.add-task');
        formBtn.addEventListener('click', () => {
            formDiv.classList.toggle('inactive');
            contentDiv.classList.toggle('blur');
        })

        //Accept form 
        const form = formDiv.querySelector('form#new-task');

        form.addEventListener('submit', (e) => {
            const taskObj = taskMod.newTask(
                document.getElementById("title").value,
                document.getElementById("date").value,
                document.getElementById("priority").value,
                document.getElementById("details").value,
                document.getElementById("project").value,
                false
            )
            storage.taskList.addTask(taskObj);

        })

        //Display projects 
        const projectsList = document.querySelector('ul.projects');
        const projectOptions = document.querySelector('select#project');
        const projectNames = storage.projectList.getProjectNames();

        for(const name of projectNames){
            const li = document.createElement('li');
            li.dataset.projectName = name;

            const link = document.createElement('a');

            //Delete task button
            const deleteBtn = document.createElement('button');
            deleteBtn.classList.add('delete');
            deleteBtn.addEventListener('click', (e) => {
                const name = e.currentTarget.parentElement.dataset.projectName;
                storage.projectList.deleteProject(name);
                e.currentTarget.parentElement.remove();
            })
            deleteBtn.textContent = "X";

            link.textContent = name;
            link.addEventListener('click', (e) => {
                const projectName = e.currentTarget.parentElement.dataset.projectName;
                const tasks = DOMHelpers.sortByProject(projectName);
                
                DOMHelpers.displayTasks(tasks);
            })

            //Display selection options for projects
            const option = document.createElement('option');
            option.textContent = name;
            option.value = name;

            li.appendChild(link);
            li.appendChild(deleteBtn);
            projectsList.appendChild(li);
            projectOptions.appendChild(option);
        }

        //Add project form
        const addProjectForm = document.getElementById('add-project-form');
        addProjectForm.addEventListener('keyup', (e) => {
            const name = e.currentTarget.value;
            if(e.key === "Enter" && name !== ''){
                console.log(e.currentTarget.value, name)
                storage.projectList.addProject(name);
            }
        })

        //Display all tasks
        const allTasks = document.querySelector('a.all-tasks');
        allTasks.addEventListener('click', () => displayAllTasks());
    }

    const displayAllTasks = function(){
        DOMHelpers.displayTasks(storage.taskList.getAllTasks());
    }
    return {displayAllTasks, setPage}
})()

window.onload = () => {
    DOMManipulator.displayAllTasks();
    DOMManipulator.setPage();
};