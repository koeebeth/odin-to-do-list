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

export {newTask, proto};