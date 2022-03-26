import './modules/navbar-action.js';
import './modules/add-book.js';
import { DateTime } from './luxon.js';
import show from './modules/show.js';

const date = document.getElementById('date');

window.addEventListener('load', () => {
  date.innerHTML = DateTime.now().toHTTP();
  show('home');
});
