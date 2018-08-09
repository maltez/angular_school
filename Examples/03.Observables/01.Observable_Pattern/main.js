const Task = require('./task');

class ServiceBase {
    constructor(message){
        this.message = message;
        this.update = this.update.bind(this);
    }

    update(task) {
        console.log(this.message + task.user + ' for task ' + task.name);
    }
}

class NotificationService extends ServiceBase {
    constructor(){
        super('Notifying');
    }
} 

class LoggingService extends ServiceBase {
    constructor(){
        super('Logging');
    }
} 

class AuditingService extends ServiceBase {
    constructor(){
        super('Auditing');
    }
} 

class ObserverList {
    constructor(){
        this.observerList = [];
    }

    add (obj) {
        return this.observerList.push(obj);
    };

    get (index) {
        if (index > -1 && index < this.observerList.length) {
            return this.observerList[index];
        }
    };

    get count () {
        return this.observerList.length;
    };

    removeAt (index) {
        this.observerList.splice(index, 1);
    };

    indexOf (obj, startIndex) {
        let i = startIndex;
    
        while (i < this.observerList.length) {
            if (this.observerList[i] === obj) {
                return i;
            }
            i++;
        }
    
        return -1;
    }
}

class ObservableTask extends Task {
    constructor(data){
        super(data);
        this.observers = new ObserverList();
    }

    addObserver (observer) {
        this.observers.add(observer);
    };

    removeObserver (observer) {
        this.observers.removeAt(this.observers.indexOf(observer, 0));
    };

    notify (context) {
        const observerCount = this.observers.count;
        for (let i = 0; i < observerCount; i++) {
            this.observers.get(i)(context);
        }
    }

    save() {
        this.notify(this);
        super.save(this);
    };
}


const task1 = new ObservableTask({
    name: 'create a demo for constructors',
    user: 'Jon',
    project: 'EXPIENT'
});

const notification = new NotificationService();
const logging = new LoggingService();
const audit = new AuditingService();

task1.addObserver(notification.update);
task1.addObserver(logging.update);
task1.addObserver(audit.update);

task1.save();
task1.complete();

task1.removeObserver(audit);
task1.save();