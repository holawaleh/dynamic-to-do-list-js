// Wait for the full HTML document to load
document.addEventListener('DOMContentLoaded', function () {

    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Define the addTask function
    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText === '') {
            alert('Please enter a task.');
            return;
        }

        // Create new task element
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.className = 'remove-btn';

        // Add functionality to remove button
        removeBtn.onclick = function () {
            taskList.removeChild(li);
        };

        // Append remove button and list item
        li.appendChild(removeBtn);
        taskList.appendChild(li);

        // Clear input field
        taskInput.value = '';
    }

    // Add click listener
    addButton.addEventListener('click', addTask);

    // Add "Enter key" listener
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

});

