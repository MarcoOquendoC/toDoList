/** * @jest-environment jsdom */

import Method from './methods.js'

window.localStorage = Storage.prototype;
document.body.innerHTML = '<ol id="list"></ol>';

describe ('Add task feature', () => {
  test('correct adding feature', () => {
    let tasks = Method.add('Task 1');
    expect(tasks).toHaveLength(1);
    tasks = Method.add('Task 2');
    expect(tasks).toHaveLength(2);
  });
  test('Empty task description', () => {
    let tasks = Method.add('');
    expect(tasks).toBe(-1);
  });
  test('HTML with correct number of <li> elements', () => {
    let htmlTasks = document.querySelectorAll('.listItem');
    expect(htmlTasks).toHaveLength(2);
  });
});

describe ('Remove task feature', () => {
  test('correct removing feature', () => {
    let htmlTasks = document.querySelectorAll('.listItem');
    expect(htmlTasks).toHaveLength(2);
    Method.remove(1);
    htmlTasks = document.querySelectorAll('.listItem');
    expect(htmlTasks).toHaveLength(1);
  });
});
