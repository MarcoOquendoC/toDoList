/** * @jest-environment jsdom */

import { TestEnvironment } from 'jest-environment-jsdom';
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
    Status.changeDescription('Awesome local storage task', 0)
    const storage = localStorage.getItem('tasks');
    const localTask = storage ? JSON.parse(storage) : [];
    expect(localTask[0].description).toBe('Awesome local storage task');
  });
});
