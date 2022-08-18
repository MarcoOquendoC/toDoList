/** * @jest-environment jsdom */

import Method from './methods.js';
import Status from './status.js';

window.localStorage = Storage.prototype;
document.body.innerHTML = '<ol id="list"></ol>';

describe('Update input', () => {
  test('Adding a task should return the new task', () => {
    Method.add('Good task');
    expect(Status.changeDescription('Awesome task', 0)).toBe('Awesome task');
  });
  test('Updating a task should replace the task in the local storage', () => {
    Status.changeDescription('Awesome local storage task', 0);
    const storage = localStorage.getItem('tasks');
    const localTask = storage ? JSON.parse(storage) : [];
    expect(localTask[0].description).toBe('Awesome local storage task');
  });
});

describe('Update completed status', () => {
  test('Adding a task should return the new task', () => {
    Method.add('Good task');
    expect(Status.changeDescription('Awesome task', 0)).toBe('Awesome task');
  });
  test('Checking a task should set true to "completed" state in local storage', () => {
    Status.toggleComplete(0);
    const storage = localStorage.getItem('tasks');
    const localTask = storage ? JSON.parse(storage) : [];
    expect(localTask[0].completed).toBeTruthy();
  });
  test('UnChecking a task should set false to "completed" state in local storage', () => {
    Status.toggleComplete(0);
    const storage = localStorage.getItem('tasks');
    const localTask = storage ? JSON.parse(storage) : [];
    expect(localTask[0].completed).toBeFalsy();
  });
});

describe('Clear all completed tasks', () => {
  Method.add('Good task');
  Method.add('Great task');
  Method.add('Awesome task');
  test('Tasks list should have a greater length before clearing', () => {
    const storage = localStorage.getItem('tasks');
    const localTask = storage ? JSON.parse(storage) : [];
    expect(localTask).toHaveLength(5);
  });
  Status.toggleComplete(1);
  Status.toggleComplete(2);
  test('Clicking "Clear all completed" button should filter local storage tasks', () => {
    Status.clearCompleted();
    const storage = localStorage.getItem('tasks');
    const localTask = storage ? JSON.parse(storage) : [];
    expect(localTask).toHaveLength(3);
  });
});
