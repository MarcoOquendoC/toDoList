import Method from './methods.js';

export default class Status {
  static changeDescription(newValue, id) {
    const storage = localStorage.getItem('tasks');
    const tasks = storage ? JSON.parse(storage) : [];
    if (tasks === []) return -1;
    tasks[id].description = newValue;
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  static toggleComplete (id) {
    const storage = localStorage.getItem('tasks');
    const tasks = storage ? JSON.parse(storage) : [];
    if (tasks === []) return -1;
    tasks[id].completed = tasks[id].completed ? false : true;
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
}