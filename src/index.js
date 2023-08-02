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
    
        const newTask = (title, dueDate = null, priority = 1, details = null, isDone = false, project = null) => {
        
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
        let props = {
            title, 
            dueDate, 
            priority, 
            details, 
            isDone, 
            project
        }
        const obj = Object.create(proto);
        return Object.assign(obj, props);
    }
    return {newTask};
})();


const storage = (function(){
    const taskList = {
        tasks: (function(){
            const list = localStorage.getItem('tasklist')
            if(list){
                return JSON.parse(list)
            }
            return []
        })(),

        deleteTask: function(i) {
            delete this.tasks[i];
            this.updateStorage();
        },

        addTask: function(task) {
            this.tasks.push(task);
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
