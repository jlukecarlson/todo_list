var todoViewModel = function(){
    this.tasks= ko.observableArray(["Swim", "Ski", "Program"])
    this.newTask = ko.observable("")
    this.people = ko.observableArray([
        { name: 'Bert' },
        { name: 'Charles' },
        { name: 'Denise' }
    ]);
    this.addTask = function () {
        this.tasks.push(this.newTask);
        this.newTask("")
    }
    this.removeTask = function(){
        self.tasks.remove(this);
    }
    this.removePerson = function(){
        self.people.remove(this);
    }
    // could i do removePerson(person) so that in the html i just pass in the name
};

window.onload = ko.applyBindings(new todoViewModel);;


/*
var todoViewModel = function(){
    this.tasks= ko.observableArray("eat", "cry", "program");
    this.NewTask = ko.observable("Input a Task");
};

window.onload = ko.applyBindings(new todoViewModel);
    this.tasks= ko.observableArray([
            {task = "Swim"}, 
            {task =  "Ski"}, 
            {task = "Program"}
        ])

 */
