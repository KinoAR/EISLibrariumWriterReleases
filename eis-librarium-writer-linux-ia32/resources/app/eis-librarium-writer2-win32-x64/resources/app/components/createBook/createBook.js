const React = require("react");
const ReactDOM = require("react-dom");

class CreateBook extends React.Component {
  constructor() {
    super();
  }

  render() {
    return(
      <div className="row text-center">
        <div onClick={this.closeForm.bind(this)}className="col-xs-offset-9 col-xs-2"><button className="btn btn-primary btn-reg"><i class="fa fa-times fa-1x" aria-hidden="true"></i></button></div>
        <div className="col-xs-12">
          <h2>Create Book</h2>
        </div>
        <div className="col-xs-12">
          <form id="CBookForm" action="">
            <div className="form-group row">
              <div className="col-xs-offset-1 col-xs-10">
                <label htmlFor="Book Title"> Book Title</label>
                <input type="text" className="form-control" id="createBookTitle" placeholder="Book Title"/>
              </div>
            </div>
            <div className="form-group">
              <button onClick={this.createBook.bind(this)} type="submit" className="btn btn-primary"> Submit </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  createBook(event) {
    event.preventDefault();
    let title = $("#createBookTitle")[0].value.trim();
    Library.addBook(title);
    console.log("Book Created");
    this.closeForm();
  }

  closeForm() {
    $("#CreateBookForm")[0].style.display = 'none';
    $("#CBookForm")[0].reset();
  }
}

exports.CreateBook = CreateBook;