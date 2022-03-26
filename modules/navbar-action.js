import show from './show.js';
import createBookList from './create-book-list.js';

const btnHome = document.getElementById('navbtn-home');
const btnList = document.getElementById('navbtn-list');
const btnAdd = document.getElementById('navbtn-add');
const btnContact = document.getElementById('navbtn-contact');

btnHome.addEventListener('click', () => {
  show('home');
});
export default btnList.addEventListener('click', () => {
  createBookList();
  show('list');
});
btnAdd.addEventListener('click', () => {
  show('add');
});
btnContact.addEventListener('click', () => {
  show('contact');
});
