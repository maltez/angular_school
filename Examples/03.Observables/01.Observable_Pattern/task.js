class Task {
    constructor(data){
        this.name = data.name;
        this.priority = data.priority;
        this.project = data.project;
        this.user = data.user;
        this.completed = false;
    }

    complete(){
        console.log('completing task: ' + this.name);
        this.completed = true;
        this.save();
    }

    save(){
        console.log('saving Task: ' + this.name);
    }
}

module.exports = Task;
