const form = document.querySelector('.js-form');

function formSubmitted(event) {
  event.preventDefault();
  const input = document.getElementById('todo-input');
  const todoText = input.value.trim();
    if (todoText !== '') {
    const todoList = document.getElementById('todo-list');
    const listItem = document.createElement('li');
    listItem.textContent = todoText;
    todoList.appendChild(listItem);
    input.value = '';
  } else {
    alert('Please enter a to-do item.');
    }
}

form.addEventListener('submit', formSubmitted);