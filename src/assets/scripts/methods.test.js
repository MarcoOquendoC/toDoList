/** * @jest-environment jsdom */

import { isEmpty } from 'lodash';
import Method from './methods.js'

describe ('Add task feature', () => {
  window.localStorage = Storage.prototype;
  document.body.innerHTML = '<ol id="list"></ol>';

  test('correct adding feature', () => {
    let tasks = Method.add('Task 1')
    expect(tasks).toHaveLength(1);
    tasks = Method.add('Task 2')
    expect(tasks).toHaveLength(2);
  });
  test('Empty task description', () => {
    let tasks = Method.add('')
    expect(tasks).toBe(-1);
  });
  test('HTML with correct number of <li> elements', () => {
    let htmlTasks = document.querySelectorAll('.listItem')
    expect(htmlTasks).toHaveLength(2);
  });
  
})