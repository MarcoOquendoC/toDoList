/* import _ from 'lodash'; */
import './style.css';

const list = document.querySelector('#list');

const data = [
  {
    id: 0,
    editable: false,
    completed: true,
    description: 'Wash the dishes',
  },
  {
    id: 0,
    editable: true,
    completed: false,
    description: 'currently editable',
  },
  {
    id: 0,
    editable: false,
    completed: false,
    description: 'Complete To Do list project',
  },
];

class Data {
  static setIndexes() {
    data.forEach((element, index) => {
      element.id = index + 1;
    });
  }

  static render() {
    list.innerHTML = '';
    data.forEach((element, index) => {
      const checked = element.completed ? 'checked' : '';
      const active = element.editable ? 'active' : '';
      const disable = element.editable ? '' : 'disabled';
      list.innerHTML
      += `
        <li class="listItem" draggable="${!element.editable}">
          <input id="check${index}" type="checkbox" name="completed" class="check" ${checked}>
          <label for="check${index}">${element.id}</label>
          <input value="${element.description}" type="text" name="description" class="description" ${disable}>
          <div>
            <button type="button" class="iconBtn editBtn ${active}"><strong>🖊</strong></button>
            <button type="button" class="iconBtn delBtn"><strong>🗑</strong></button>
          </div>
        </li>
      `;
    });
  }
}

Data.setIndexes();
Data.render();
