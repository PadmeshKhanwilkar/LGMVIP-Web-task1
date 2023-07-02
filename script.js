const inputBox = document.getElementById('input-box');
const listBox = document.getElementById('list-box');
function addTask() {
  if (inputBox.value === '') {
    alert('Please enter a task');
  } else {
    let li = document.createElement('li');
    li.innerHTML = inputBox.value;
    listBox.appendChild(li);
    let span = document.createElement('span');
    span.innerHTML = '\u00d7';
    li.appendChild(span);
  }
  inputBox.value = '';
  saveTasks();
}

listBox.addEventListener(
  'click',
  function (e) {
    if (e.target.tagName === 'LI') {
      e.target.classList.toggle('checked');
      saveTasks();
    } else if (e.target.tagName === 'SPAN') {
      e.target.parentElement.remove();
      saveTasks();
    }
  },
  false
);

function saveTasks() {
  localStorage.setItem('task', listBox.innerHTML);
}
function showTasks() {
  listBox.innerHTML = localStorage.getItem('data');
}
showTasks();
