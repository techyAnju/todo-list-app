const input = document.getElementById("task-input");
const addBtn = document.getElementById("add-task");
const taskList = document.getElementById("task-list");

addBtn.addEventListener("click", () => {
  const taskText = input.value.trim();
  if (taskText === "") return;      // Ignore empty input

  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = taskText;
  span.className = "task-text";

  // Toggle 'completed' class on click (for strike-through effect)
  span.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  const btnGroup = document.createElement("div");
  btnGroup.className = "btn-group";


  // Edit task text
  const editBtn = document.createElement("button");
  editBtn.textContent = "✏️";
  editBtn.onclick = () => {
    const newTask = prompt("Edit your task:", span.textContent);
    if (newTask) {
      span.textContent = newTask.trim();
    }
  };


  // Delete the task
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "❌";
  deleteBtn.onclick = () => {
    li.remove();
  };

  btnGroup.appendChild(editBtn);
  btnGroup.appendChild(deleteBtn);

  li.appendChild(span);
  li.appendChild(btnGroup);
  taskList.appendChild(li);

  input.value = "";      // clear input field
});
