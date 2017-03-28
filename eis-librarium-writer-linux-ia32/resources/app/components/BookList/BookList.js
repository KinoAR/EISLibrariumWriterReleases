const React = require("react");
const ReactDOM = require("react-dom");

class BookList extends React.Component {
  constructor() {
    super();
    this.state = {searchText: ""};
  }
  render() {
    return (
      <div className="row">
      <div className="col-xs-12 text-center l-shape"> <h4> Book Search </h4> </div>
        <div className="col-xs-12 book-search mdl-textfield mdl-js-textfield mdl-textfield--floating-label r-shape"> 
          <input onInput={this.updateBookSearch.bind(this)} id="BookSearchBar" className="book-search mdl-textfield__input" type="text" />
          <label class="mdl-textfield__label" for="Book Search">Book Title...</label>
        </div>
        <div className="col-xs-12 book-list">
          <ul className="book-list">
            {this.props.booklist.reduce((finalBooks, book) => {
              finalBooks = finalBooks || [];
              if(new RegExp(String(this.state.searchText), "i").test(book.title)){
                finalBooks.push(( <li key={book.title} className="book-list">
                  <div className="btn-group grouping-wide">
                    <button onClick={this.selectBook.bind(this, book)} className="btn btn-primary book-list pageform-button">{book.title} </button>
                    <button onClick={this.promptDeleteBook.bind(this, book)} className="btn btn-primary btn-reg pageform-button"><i class="fa fa-times fa-1x" aria-hidden="true"></i></button>
                  </div>
                  </li>));
                return finalBooks;
              }
              else
                return finalBooks;
            }, [])}
          </ul>
          <br />
          <button onClick={this.createBook.bind(this)} className="book-create btn btn-primary book-list pageform-button"> Create Book <span className="text-right"><i class="fa fa-book text-right" aria-hidden="true"></i> </span></button>
        </div>
      </div>
    );
  }

  updateBookSearch(event) {
    this.setState({searchText: event.target.value});
  }

  selectBook(book) {
    console.log(book);
    Library.setCurrentBook(book);
    $("#pageTextInfo")[0].value = Library.getCurrentBook().pages[0].pageText;
    this.props.resetPageIndex();
  }

  promptDeleteBook(book) {
    deleteEvent._book = book;
    deleteEvent.emit("delete-book");
  }

  createBook() {
    Library.addBook("New Book");
  }
}

exports.BookList = BookList;
