import BookClass from './book-class.js';
import { createElements, appendElements } from './DOM-action.js';

const elBookList = document.querySelector('.book-list');
const removeAllChildNodes = (parent) => {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
};

const fromJson = (b) => new BookClass(b.id, b.title, b.author);

// === create book list === //
export default function createBookList() {
  removeAllChildNodes(elBookList);
  if (localStorage.getItem('bookList') != null) {
    const tempArray = JSON.parse(localStorage.getItem('bookList'));
    tempArray.forEach((b) => {
      b = fromJson(b);
      createElements();
      appendElements(b);
    });
  }
}
