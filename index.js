let selector = document.getElementById('adder')
        selector.addEventListener('click', function (event) {
            console.log("CLICKED!");
            let removeAdd = document.getElementById('addBtn')
            let removeCancel = document.getElementById('cancelBtn')
            if (removeAdd !== null) {
                removeAdd.remove();
                removeCancel.remove();
            }
            const container = document.getElementById('select')
            const add = document.createElement("div");
            add.addEventListener('click', function (event) {
                removeAdd = document.getElementById('addBtn')
                removeCancel = document.getElementById('cancelBtn')
                removeAdd.remove();
                removeCancel.remove();
                let addBar = document.createElement("input");
                addBar.focus();
                addBar.className = "addBar";
                addBar.id = "addBar";
                addBar.setAttribute("onkeydown", "titleProj(this)");
                addBar.placeholder = "Add title"
                let addHere = document.getElementById('addHere');
                addHere.appendChild(addBar);
            })
            add.className = "addBtn"
            add.id = "addBtn"
            add.innerHTML = "ADD"
            const cancel = document.createElement("div");
            cancel.addEventListener('click', function (event) {
                removeAdd = document.getElementById('addBtn')
                removeCancel = document.getElementById('cancelBtn')
                removeAdd.remove();
                removeCancel.remove();
            })
            cancel.className = "cancelBtn"
            cancel.id = "cancelBtn"
            cancel.innerHTML = "CANCEL";
            container.appendChild(add);
            container.appendChild(cancel);
        })

let objValues = [];

function titleProj(ele) {
    if(event.key === 'Enter') {
        console.log(ele.value);
        objValues.push(ele.value)
        let addBar = document.getElementById('addBar');
        addBar.remove();
        addBar = document.createElement("input");
        addBar.focus();
        addBar.className = "addBar";
        addBar.id = "addBar";
        addBar.setAttribute("onkeydown", "description(this)");
        let addHere = document.getElementById('addHere');
        addBar.placeholder = "Add description"
        addHere.appendChild(addBar);
    }
}

function description(ele) {
    if(event.key === 'Enter') {
        console.log(ele.value);
        objValues.push(ele.value)
        let addBar = document.getElementById('addBar');
        addBar.remove();
        addBar = document.createElement("input");
        addBar.focus();
        addBar.className = "addBar";
        addBar.id = "addBar";
        addBar.setAttribute("onkeydown", "duedate(this)");
        let addHere = document.getElementById('addHere');
        addBar.placeholder = "Add due date"
        addHere.appendChild(addBar);
    }
}

function duedate(ele) {
    if(event.key === 'Enter') {
        console.log(ele.value);
        objValues.push(ele.value)
        let addBar = document.getElementById('addBar');
        addBar.remove();
        addBar = document.createElement("input");
        addBar.focus();
        addBar.className = "addBar";
        addBar.id = "addBar";
        addBar.setAttribute("onkeydown", "priority(this)");
        let addHere = document.getElementById('addHere');
        addBar.placeholder = "Add priority"
        addHere.appendChild(addBar);
    }
}

let i = 0;

function priority(ele) {
    if(event.key === 'Enter') {
        console.log(ele.value);
        objValues.push(ele.value)
        console.log(objValues)
        let addBar = document.getElementById('addBar');
        let newObj = new list(objValues[0], objValues[1], objValues[2], objValues[3]);
        objValues = [];
        console.log(newObj)
        addBar.remove();
        let inProgress = document.getElementById('inProgress');
        let newProj = document.createElement("div");
        newProj.className = 'project'
        let newTitle = document.createElement("div");
        newTitle.innerHTML += newObj.title;
        let newDesc = document.createElement("div");
        newDesc.innerHTML += newObj.description;
        let newDue = document.createElement("div");
        newDue.innerHTML += newObj.dueDate;
        let newPriority = document.createElement("div");
        newPriority.innerHTML += newObj.priority;
        inProgress.appendChild(newProj);
        newProj.appendChild(newTitle);
        newProj.appendChild(newDesc);
        newProj.appendChild(newDue);
        newProj.appendChild(newPriority);
    }
}

class Card {
	constructor(value, suit) {
  	this.value = value;
    this.suit = suit;
  }
}

class list {
	constructor(title, description, dueDate, priority) {
  	this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }
}

const JackOfHearts = new Card("11", "heart");
console.log(JackOfHearts)

const activity1 = new list("Jumprope", "Exercise jumprope for 10 minutes", "12/13/2022", "High")
console.log(activity1);
console.log(activity1.title)
