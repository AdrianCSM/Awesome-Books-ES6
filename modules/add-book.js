import BookClass from './book-class.js';

const btnAdd = document.getElementById('add-btn');
const inputTitle = document.getElementById('title-input');
const inputAuthor = document.getElementById('author-input');

export default btnAdd.addEventListener('click', () => {
  const book = new BookClass(
    undefined,
    inputTitle.value,
    inputAuthor.value,
  );
  book.Add();
  inputTitle.innerHTML = '';
  inputAuthor.innerHTML = '';
});
