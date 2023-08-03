
//Storage availability check from MDN docs
function storageAvailable(type) {
    let storage;
    try {
      storage = window[type];
      const x = "__storage_test__";
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
    } catch (e) {
      return (
        e instanceof DOMException &&
        (e.code === 22 ||
          e.code === 1014 ||
          e.name === "QuotaExceededError" ||
          e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
        storage &&
        storage.length !== 0
      );
    }
  }

const taskMod = (function(){ 
    
    const proto = {
        check: function() {
            this.isDone = this.isDone === false ? true : false;
            return this.isDone
        },
        change: function(prop, value) {
            this[prop] = value;
            return this[prop];
        }
    }
        const newTask = (title, dueDate = null, priority = 1, details = null, project = null, isDone = false) => {
        
        let props = {
            title, 
            dueDate, 
            priority, 
            details, 
            project,
            isDone
        }
        const obj = Object.create(proto)
        return Object.assign(obj, props);
    }
    return {newTask, proto};
})();


const storage = (function(){
    let tasks = JSON.parse(localStorage.getItem('taskList'));
    if(!tasks) {
        tasks = [];
    }

    const taskList = {
        tasks: tasks,

        getAllTasks: function(){
            return this.tasks;
        },

        deleteTask: function(i) {
            delete this.tasks[i];
            this.updateStorage();
        },

        addTask: function(task) {
            task["id"] = this.tasks.length;
            this.tasks.push(task);
            this.updateStorage();
        },

        editTask: function(i, prop, value) {
            this.tasks[i][prop] = value;
            this.updateStorage();
        },

        checkTask: function(i) {
            this.tasks[i].isDone = this.tasks[i].isDone === false ? true : false;
            this.updateStorage();
        },

        getTask: function(i){
            return this.tasks[i];
        },

        updateStorage: function(){
            if(storageAvailable){
                localStorage.setItem('taskList', JSON.stringify(this.tasks));
            }
        }
    }
    return {taskList}
})()


const DOMHelpers = (function(){
    function renderTask(task){
        const taskDiv = document.createElement('div');
        taskDiv.classList.add('task');
        taskDiv.dataset.taskId = task.id;

        const taskHeader = document.createElement('h3');
        taskHeader.textContent = task.title;

        const project = document.createElement('h4');
        if(task.project){
            project.textContent = `Project: ${task.project}`
        }
        else{
            project.textContent = "No project"
        }

        const br = document.createElement('br');

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
            dueDate.textContent = `Due to: ${task.dueDate}`
        }
        else{
            dueDate.textContent = "No date"
        }

        const check = document.createElement('input');
        check.classList.add('check');
        check.setAttribute('type', 'checkbox')
        if (this.isDone) {
            check.checked = true;
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

        taskDiv.appendChild(taskHeader);
        taskDiv.appendChild(project);
        taskDiv.appendChild(br);
        taskDiv.appendChild(details);
        taskDiv.appendChild(dueDate);
        taskDiv.appendChild(check);

        return taskDiv;
    }
    return {renderTask};
})()


const DOMManipulator = (function(){
    const tasksDiv =  document.querySelector("#tasks");
    const contentDiv = document.querySelector('div#content')

    const clearTaskDiv = function(){
        tasksDiv.innerHTML = ''
    }

    const setPage = function(){
        //New Task Popup
        const formDiv = document.querySelector('div.new-task');
        const formBtn = document.querySelector('button.add-task');
        formBtn.addEventListener('click', () => {
            formDiv.classList.toggle('inactive');
            contentDiv.classList.toggle('blur');
        })

        //Accept form 
        const formSubmitBtn = formDiv.querySelector('button#add-task');

        formSubmitBtn.addEventListener('submit', (e) => {
            e.preventDefault();
            const taskObj = taskMod.newTask(
                document.getElementById("title").value,
                document.getElementById("date").value,
                document.getElementById("priority").value,
                document.getElementById("details").value,
                document.getElementById("project").value,
                false
            )
            storage.taskList.addTask(taskObj);
            location.reload();
        })
    }

    const displayAllTasks = function(){
        clearTaskDiv();
        const tasks = storage.taskList.getAllTasks();
        for (const task of tasks){
            if(task){
                const newTask = DOMHelpers.renderTask(task)
                tasksDiv.appendChild(newTask);
            }
        }
    }
    return {displayAllTasks, setPage}
})()

window.onload = () => {
    //DOMManipulator.displayAllTasks();
    DOMManipulator.setPage();
};

task1 = taskMod.newTask('laundry', 'tomorrow', null, "no details", "no projects", false)