export default class BookClass {
  static bookArray = [];

  constructor(id = BookClass.bookArray.length + 1, title, author) {
    this.id = id;
    this.title = title;
    this.author = author;
  }

  Add() {
    BookClass.bookArray.push(this);
    localStorage.setItem('bookList', JSON.stringify(BookClass.bookArray));
  }

  Get() {
    return this;
  }

  getId() {
    return this.id;
  }

  getTitle() {
    return this.title;
  }

  getAuthor() {
    return this.author;
  }

  static getArrayLength() {
    return BookClass.bookArray.length;
  }
}
