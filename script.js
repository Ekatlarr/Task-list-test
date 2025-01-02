let tasks = [];

const addTask = document.getElementById ('addTask')
addTask.addEventListener('click',function () {
        const taskInput = document.getElementById('taskInput');
        const taskName = taskInput.value.trim();
        if (taskName) {
            tasks.push({ name: taskName, completed: false });
            taskInput.value = '';
            displayTasks();
        } else {
            alert('Название задачи не может быть пустым.');
        }
    })

    function deleteTask(index) {
        tasks.splice(index, 1);
        displayTasks();
    }
    function editTask(index) {
        tasks.splice(index, 1);
        taskInput = document.getElementById('taskList');
        tasks.push({ name: taskName, completed: false });
        displayTasks();
    }
    
    function toggleTaskCompletion(index) {
        tasks[index].completed = !tasks[index].completed;
        displayTasks();
    }

const showAll = document.getElementById ('showAll')
showAll.addEventListener('click', function () {
        displayTasks();
    })
const showCompletedTasks = document.getElementById ('showCompletedTasks')
showCompletedTasks.addEventListener ('click', function () {
        displayTasks(tasks.filter(task => task.completed));
    })

const showIncompleteTasks = document.getElementById ('showIncompleteTasks')
showIncompleteTasks.addEventListener ('click', function () {
        displayTasks(tasks.filter(task => !task.completed));
    })

    function displayTasks(filteredTasks = tasks) {
        const taskList = document.getElementById('taskList');
        taskList.innerHTML = '';
        
        filteredTasks.forEach((task, index) => {
            const li = document.createElement('li');
            li.className = 'task-item';
            li.innerHTML = `
                <span class="task-text ${task.completed ? 'completed' : ''}" ondblclick="editTask(${index})">
                    ${task.name}
                </span>
                <input type="text" onchange="editTask(${index})" onblur="editTask(${index})">
                <button onclick="toggleTaskCompletion(${index})">${task.completed ? 'Не выполнена' : 'Выполнена'}</button>
                <button onclick="deleteTask(${index})">Удалить</button>
                <button onclick="editTask(${index})">Редактировать</button>
            `;
            taskList.appendChild(li);
        });
    }