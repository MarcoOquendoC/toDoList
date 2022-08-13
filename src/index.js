/* import _ from 'lodash'; */
import './style.css';

const list = document.querySelector('#list');

const data = [];

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
      list.innerHTML
      += `
        <li class="listItem" draggable="true">
          <input id="check${index}" type="checkbox" name="completed" class="check" ${checked}>
          <label for="check${index}">${element.id}</label>
          <input value="${element.description}" type="text" name="description" class="description" disabled>
          <div>
            <button type="button" class="iconBtn editBtn"><strong>🖊</strong></button>
            <button type="button" class="iconBtn delBtn"><strong>🗑</strong></button>
          </div>
        </li>
      `;
    });
  }
}

Data.setIndexes();
Data.render();
