import Method from './methods.js';

export default class Status {
  static changeDescription(newValue, id) {
    const storage = localStorage.getItem('tasks');
    const tasks = storage ? JSON.parse(storage) : [];
    if (tasks === []) return -1;
    tasks[id].description = newValue;
    localStorage.setItem('tasks', JSON.stringify(tasks));
    return newValue;
  }

  static toggleComplete(id) {
    const storage = localStorage.getItem('tasks');
    const tasks = storage ? JSON.parse(storage) : [];
    if (tasks === []) return -1;
    tasks[id].completed = !tasks[id].completed;
    localStorage.setItem('tasks', JSON.stringify(tasks));
    return 'Completed state has been toggled';
  }

  static clearCompleted() {
    const storage = localStorage.getItem('tasks');
    let tasks = storage ? JSON.parse(storage) : [];
    if (tasks === []) return -1;
    tasks = tasks.filter((element) => !element.completed);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    Method.setIndexes();
    Method.render();
    return 'Completed tasks have been removed';
  }
}