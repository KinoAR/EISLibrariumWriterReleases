//Library Class
class Library {
  static start() {
    this._currentBook = null;
    this._bookList = [];
  }
  static setCurrentBook(book) {
    console.log(book);
    this._currentBook = book;
  }

  static setBookList(booklist) {
    this._bookList = booklist;
  }

  static getCurrentBook() {
    return this._currentBook;
  }

  static getBookList() {
    return this._bookList;
  }

  static getBook(bookName) {
    return this._bookList.reduce((finalBook, currentBook) => { 
      if(currentBook.name === bookName)
        finalBook = currentBook;
      else
        return finalBook;
    }, null);
  }

  static addBook(bookName) {
    let book = {
      "title": bookName,
      "pages": [
        {
          "pageNumber": 1,
          "pageText": "Sample Text"
        }
      ]
    };
    this._bookList.push(book);
  }

  static addPage() {
    let book = this.getCurrentBook();
    if(book !== null) {
      let page = {
        "pageNumber": book.pages[book.pages.length - 1] +  1,
        "pageText": "Sample Text"
      };
      book.pages.push(page);
    }

  }

  static deleteBook(book) {
    let delBook = null;
    this._bookList.forEach((libBook, index) => {
      if(libBook.title === book.title) {
        delBook = this._bookList.splice(index, 1);
      }
    });
    console.log(delBook);
  }
}

Library._currentBook = null;
Library._bookList = [];

global.Library = Library;
exports.Library = global.Library;
