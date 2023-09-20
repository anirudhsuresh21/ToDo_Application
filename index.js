let i = 0;


function loadTasks() {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    savedTasks.forEach(task => {
        createCheckbox(task);
    });
}

function saveTasks() {
    const tasks = Array.from(document.querySelectorAll('.cyberpunk-checkbox-label'))
        .map(label => ({
            text: label.textContent,
            checked: label.querySelector('.cyberpunk-checkbox').checked
        }));
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function createCheckbox(task) {
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = `cb${i}`;
    checkbox.className = "cyberpunk-checkbox";
    checkbox.checked = task.checked; 

    let label = document.createElement("label");
    label.className = "cyberpunk-checkbox-label";
    label.appendChild(checkbox);
    label.appendChild(document.createTextNode(task.text));

   
    let div = document.getElementById("container1");


    div.appendChild(label);


    i++;
}

function ToDo() {
    let input = document.getElementById("task").value;
    console.log(input);

    createCheckbox({ text: input, checked: false });

   
    saveTasks();
    
}


window.addEventListener('load', loadTasks)