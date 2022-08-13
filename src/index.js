/* import _ from 'lodash'; */
/* import 'style.css'; */

const list = document.querySelector('#list');
const form = document.querySelector('#form');
const description = document.querySelector('#description');
let id = 0;
let data = [
  {
    _description: 'Wash the dishes',
    _completed: false,
    _id: 0,
  },
  {
    _description: 'Complete To Do list project',
    _completed: false,
    _id: 0,
  },
  {
    _description: 'Great it works',
    _completed: false,
    _id: 0,
  }
];

class Task {
  constructor(description, id = 0) {
    this._description = description;
    this._completed = false;
    this._id = id;
  }
}


class Data {
  static setIndexes() {
    data.forEach((element, index) => {
      element._id = index + 1;
    });
  }

  static render() {
    list.innerHTML = '';
    data.forEach((element, index) => {
      const checked = element._completed? 'checked': '';
      list.innerHTML += 
      `
        <li class="listItem" draggable="true">
          <input id="check${index}" type="checkbox" name="completed" class="check" ${checked}>
          <label for="check${index}">${element._id}</label>
          <input value="${element._description}" type="text" name="description" class="description active" disabled>
          <div>
            <button type="button" class="iconBtn editBtn"><strong>🖊</strong></button>
            <button type="button" class="iconBtn delBtn"><strong>🗑</strong></button>
          </div>
        </li>
      `
    });
  }
}

Data.setIndexes()
Data.render()
