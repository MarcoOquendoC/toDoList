import Task from './constructor.js';

export default class Method {
  static setIndexes() {
    const storage = localStorage.getItem('tasks');
    const tasks = storage ? JSON.parse(storage) : [];
    if (tasks !== []) {
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
    if (tasks !== []) {
      tasks.forEach((element) => {
        const checked = element.completed ? 'checked' : '';
        const editableActive = element.editable ? 'active' : '';
        const editableDisable = element.editable ? '' : 'disabled';
        list.innerHTML
        += `
          <li id="e${element.id}" class="listItem" draggable="true">
            <input id="check${element.id}" type="checkbox" name="completed" class="check" ${checked}>
            <label for="check${element.id}">${element.id}</label>
            <input value="${element.description}" type="text" name="description" class="description" ${editableDisable}>
            <div>
              <button type="button" class="iconBtn editBtn ${editableActive}">🖊</button>
              <button type="button" class="iconBtn delBtn">🗑</button>
            </div>
          </li>
        `;
      });
    }
  }

  static add(description) {
    if (!description) return -1;
    const storage = localStorage.getItem('tasks');
    const tasks = storage ? JSON.parse(storage) : [];

    const task = new Task(description, tasks.length);
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));

    const list = document.querySelector('#list');
    list.innerHTML
      += `
        <li id="e${tasks.length - 1}" class="listItem" draggable="true">
          <input id="check${tasks.length - 1}" type="checkbox" name="completed" class="check">
          <label for="check${tasks.length - 1}">${tasks.length - 1}</label>
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
    const storage = localStorage.getItem('tasks');
    const tasks = storage ? JSON.parse(storage) : [];
    if (tasks === []) return -1;
    const removed = tasks.splice(id, 1);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    Method.setIndexes();
    Method.render();
    return removed;
  }

  static toggleEdit(id) {
    const storage = localStorage.getItem('tasks');
    const tasks = storage ? JSON.parse(storage) : [];
    if (tasks === []) return -1;
    tasks[id].editable = !tasks[id].editable;
    localStorage.setItem('tasks', JSON.stringify(tasks));
    return 'Edit state has been toggled';
  }
}
