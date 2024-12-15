
let todoList = JSON.parse(localStorage.getItem('todoList')) || [];

    generateHtml();

    function displayData() {
      const inputElement1 = document.querySelector('.todoInput');
      const Name = inputElement1.value;

      const inputElement2 = document.querySelector('.todoDate');
      const Date = inputElement2.value;

      const inputElement3 = document.querySelector('.todoTime');
      const Time = inputElement3.value;

      if (!Name.trim()) {
        alert('Please enter a todo title.');
        return;
      }

      todoList.push({ Name, Date, Time });
      storage();

      inputElement1.value = '';
      inputElement2.value = '';
      inputElement3.value = '';

      generateHtml();
    }

    function generateHtml() {
      let newTodoList = '';

      todoList.forEach(function (todo, index) {
        const { Name, Date, Time } = todo;

        const html = `
          <div class="todo-item">
            <div class="number">No: ${index + 1}</div>
            <div><strong>Title:</strong> ${Name}</div>
            <div><strong>Date:</strong> ${Date}</div>
            <div><strong>Time:</strong> ${Time}</div>
            <button onclick="todoList.splice(${index}, 1); generateHtml(); storage();" class="deleteTodoBtn">Delete</button>
          </div>`;
        newTodoList += html;
      });

      document.querySelector('.display').innerHTML = newTodoList;
    }

    function storage() {
      localStorage.setItem('todoList', JSON.stringify(todoList));
    }