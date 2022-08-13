import Task from './constructor.js';

export default class Method {
  static setIndexes() {
    const storage = localStorage.getItem('tasks');
    const tasks = storage ? JSON.parse(storage) : [];
    if(tasks !== []) {
      tasks.forEach((element, index) => { element.id = index; });
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
    return tasks;
  }

  static render() {
    const storage = localStorage.getItem('tasks');
    const tasks = storage ? JSON.parse(storage) : [];
    const list = document.querySelector('#list');
    list.innerHTML = '';
    if(tasks !== []) {
      tasks.forEach((element, index) => {
        const checked = element.completed ? 'checked' : '';
        list.innerHTML
        += `
          <li class="listItem" draggable="true">
            <input id="check${index}" type="checkbox" name="completed" class="check" ${checked}>
            <label for="check${index}">${element.id}</label>
            <input value="${element.description}" type="text" name="description" class="description" disabled>
            <div>
              <button type="button" class="iconBtn editBtn">🖊</button>
              <button type="button" class="iconBtn delBtn">🗑</button>
            </div>
          </li>
        `;
      });
    }
  }

  static add(description) {
    if(!description) return -1
    const storage = localStorage.getItem('tasks');
    const tasks = storage ? JSON.parse(storage) : [];

    const task = new Task(description, tasks.length)
    tasks.push(task)
    localStorage.setItem('tasks', JSON.stringify(tasks));

    const list = document.querySelector('#list');
    list.innerHTML
      += `
        <li class="listItem" draggable="true">
          <input id="check${tasks.length}" type="checkbox" name="completed" class="check">
          <label for="check${tasks.length}">${tasks.length-1}</label>
          <input value="${description}" type="text" name="description" class="description" disabled>
          <div>
            <button type="button" class="iconBtn editBtn">🖊</button>
            <button type="button" class="iconBtn delBtn">🗑</button>
          </div>
        </li>
      `;
    return tasks;
  }

  static remove(id) {
    if(!id) return -1
    const storage = localStorage.getItem('tasks');
    const tasks = storage ? JSON.parse(storage) : [];
    if(tasks !== []) {
      tasks.splice(id, 1);
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
    Method.setIndexes()
    Method.render();
  }
}
