const React = require("react");
const ReactDOM = require("react-dom");

class ContextList extends React.Component {
  constructor() {
    super();
  }

  render() {
    return(
      <div className="row text-center">
        <div className="col-xs-12"> <h2> Menu </h2></div>
        <div className="col-xs-12">
          <button onClick={this.openBookForm.bind(this)}id="CreateBook" className="btn btn-primary book-list">Create New Book <i class="fa fa-book" aria-hidden="true"></i></button>
        </div>
        <div className="col-xs-12">
          <button onClick={this.addPage.bind(this)} className="btn btn-primary book-list">New Book Page <i class="fa fa-file-text" aria-hidden="true"></i></button>
        </div>
      </div>
    );
  }

  openBookForm() {
    $("#CreateBookForm")[0].style.display = 'block';
  }

  addPage() {
    Library.addPage();
  }
}

exports.ContextList = ContextList;