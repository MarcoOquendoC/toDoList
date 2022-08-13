/* import _ from 'lodash'; */
/* import './style.css'; */
import Method from './assets/scripts/methods.js';

Method.render();

const form = document.querySelector('#form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const description = e.target.firstChild.nextSibling.value;
  Method.add(description);
  e.target.firstChild.nextSibling.value = '';
});
