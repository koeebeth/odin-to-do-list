import * as taskMod from './taskmodule.js'

//Storage availability check (source: MDN docs)
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



let tasks = JSON.parse(localStorage.getItem('taskList'));
if(!tasks) {
    tasks = [
    ];
}

let projects = JSON.parse(localStorage.getItem('projectList'));
if(!projects){
    projects = [
        "Home",
        "Work",
        "Other",
        "Unsorted"
    ]   
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
        if(!projectList.getProjectNames().includes(task.project)){
            projectList.addProject(task.project);
        }
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

const projectList = {
    projects: projects,
    
    getProjectNames: function(){
        return projects;
    },

    addProject: function(name){
        const projects = this.projects;
        projects.push(name);
        this.updateStorage()
    },

    deleteProject: function(name) {
        const projects = this.projects;
        const index = projects.indexOf(name);
        if (index !== (-1)){
            projects.splice(index, 1);
        }
        this.updateStorage()
    },

    updateStorage: function(){
        if(storageAvailable){
            localStorage.setItem('projectList', JSON.stringify(this.projects));
        }
    }
}

export {taskList, projectList}