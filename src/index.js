import * as storage from './modules/storage.js';
import * as taskMod from './modules/taskmodule.js';
import * as DOMHelpers from './modules/helpers.js';
import './style.css'


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
        const projectNames = storage.projectList.getProjectNames();
        for(const name of projectNames){
            const li = document.createElement('li');
            const link = document.createElement('a');
            link.dataset.projectName = name;
            link.textContent = name;
            link.addEventListener('click', (e) => {
                const projectName = e.currentTarget.dataset.projectName;
                const tasks = DOMHelpers.sortByProject(projectName);
                
                DOMHelpers.displayTasks(tasks);
            })
            li.appendChild(link);
            projectsList.appendChild(li);
        }

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

let task1 = taskMod.newTask('laundry', 'tomorrow', null, "no details", "no projects", false)