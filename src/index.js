// Task class to represent each to-do item
class Task {
    constructor(description) {
      this.description = description;
      this.completed = false;
    }
  }
  
  // Array to hold all tasks
  const tasks = [];
  
  // Function to create the base HTML structure
  function createLayout() {
    const container = document.createElement("div");
    container.id = "app";
  
    const title = document.createElement("h1");
    title.textContent = "To-Do List";
  
    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Enter a task";
    input.id = "task-input";
  
    const addBtn = document.createElement("button");
    addBtn.textContent = "Add Task";
    addBtn.id = "add-btn";
  
    const list = document.createElement("ul");
    list.id = "task-list";
  
    container.appendChild(title);
    container.appendChild(input);
    container.appendChild(addBtn);
    container.appendChild(list);
  
    document.body.appendChild(container);
  }
  
  // Function to render all tasks
  function renderTasks() {
    const list = document.getElementById("task-list");
    list.innerHTML = ""; // Clear existing tasks
  
    tasks.forEach((task, index) => {
      const li = document.createElement("li");
  
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.checked = task.completed;
      checkbox.addEventListener("change", () => {
        task.completed = !task.completed;
        renderTasks();
      });
  
      const span = document.createElement("span");
      span.textContent = task.description;
      if (task.completed) {
        span.style.textDecoration = "line-through";
      }
  
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      deleteBtn.addEventListener("click", () => {
        tasks.splice(index, 1);
        renderTasks();
      });
  
      li.appendChild(checkbox);
      li.appendChild(span);
      li.appendChild(deleteBtn);
      list.appendChild(li);
    });
  }
  
  // Function to handle adding new tasks
  function addTask() {
    const input = document.getElementById("task-input");
    const description = input.value.trim();
  
    if (description) {
      tasks.push(new Task(description));
      input.value = "";
      renderTasks();
    }
  }
  
  // Setup app when DOM is ready
  document.addEventListener("DOMContentLoaded", () => {
    createLayout();
  
    document.getElementById("add-btn").addEventListener("click", addTask);
  
    document.getElementById("task-input").addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        addTask();
      }
    });
  });
  




