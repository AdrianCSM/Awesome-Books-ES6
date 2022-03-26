import BookClass from './book-class.js';
// === declaration of variables === //
let elBookContainer;
let elID;
let elTitle;
let elAuthor;
let elRemoveBtn;
const elBookList = document.querySelector('.book-list');

const toggoleRowColor = () => {
  const bookContainers = document.querySelectorAll('.book-container');
  for (let i = 0; i < bookContainers.length; i += 1) {
    if (i % 2 === 0) bookContainers[i].style.backgroundColor = 'lightgray';
  }
};

const fromJson = (b) => new BookClass(b.id, b.title, b.author);

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

export function createElements() {
  elBookContainer = document.createElement('div');
  elBookContainer.classList = 'book-container';
  elID = document.createElement('p');
  elTitle = document.createElement('p');
  elAuthor = document.createElement('p');
  elRemoveBtn = document.createElement('button');
  elRemoveBtn.textContent = 'Remove';
}

export const appendElements = (book) => {
  elBookList.appendChild(elBookContainer);

  elID.innerText = book.getId();
  elID.hidden = true;
  elBookContainer.appendChild(elID);

  elTitle.innerText = `${book.getTitle()} by `;
  elBookContainer.appendChild(elTitle);

  elAuthor.innerText = book.getAuthor();
  elBookContainer.appendChild(elAuthor);

  elBookContainer.appendChild(elRemoveBtn);

  // === button to remove item from the list book === //
  elRemoveBtn.addEventListener('click', () => {
    BookClass.bookArray = BookClass.bookArray.filter((ele) => ele.id !== book.getId());
    localStorage.setItem('bookList', JSON.stringify(BookClass.bookArray));

    removeAllChildNodes(elBookList);
    const tempArray = JSON.parse(localStorage.getItem('bookList'));
    tempArray.forEach((b) => {
      b = fromJson(b);
      createElements();
      appendElements(b);
    });
  });
  toggoleRowColor();
};
