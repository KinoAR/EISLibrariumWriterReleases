const React = require("react");
const ReactDOM = require("react-dom");

class ChangeTitle extends React.Component {
  constructor() {
    super();
    createEvent.on('change-title', () => {
      this.showWindow();
    });
  }

  render() {
    return (
      <div className="col-xs-12">
        <div className="col-xs-12">
          <div className="col-xs-12 book-search mdl-textfield mdl-js-textfield r-shape"> 
            <input id="changeTitle" className="book-search mdl-textfield__input" type="text" placeholder="BookTitle" />
            <label class="mdl-textfield__label" for="Book Search">Book Title</label>
          </div>
        </div>
        <div className="col-xs-12">
        <div className="button-group">  
          <button onClick={this.ok.bind(this)} className="btn btn-block btn-primary btn-reg pageform-button"> Ok </button>
          <button onClick={this.cancel.bind(this)} className="btn btn-block btn-primary btn-reg pageform-button"> Cancel </button>
        </div>    
        </div>  
      </div>
    );
  }

  changeBookTitle(book, title) {
    book.title = title;
  }

  showWindow() {
    $("#ChangeTitlePrompt")[0].style.display = "block";
  }

  ok() {
    this.changeBookTitle(createEvent._book, $("#changeTitle")[0].value.trim());
    this.cancel();
  }

  cancel() {
    $("#ChangeTitlePrompt")[0].style.display = "none";
  }
}

exports.ChangeTitle = ChangeTitle;