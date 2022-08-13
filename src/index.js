/* import _ from 'lodash'; */
import './style.css';
import Method from './assets/scripts/methods.js';

Method.setIndexes();
Method.render();

const form = document.querySelector('#form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const description = e.target.firstChild.nextSibling.value;
  Method.add(description);
  e.target.firstChild.nextSibling.value = '';
});

const list = document.querySelector('#list');
list.addEventListener('click', (e) => {
  if (e.target.textContent === '🗑') {
    let { id } = e.target.parentElement.parentElement;
    id = Number(id.slice(1));
    Method.remove(id);
  }
});
