const React = require("react");
const ReactDOM = require("react-dom");


class TitleBar extends React.Component {
  constructor() {
    super();
    this.state = { title: "Title" };
  }

  render() {
    return(
      <div id="TitleBar" className="row">
        <div className="col-xs-12">
          <div className="col-xs-4 text-left"><h4 className="page-header-eis"> { this.props.title }</h4> </div>
          <div className="col-xs-8 text-right">
            <div className="button-group title-bar-buttons">
              {(this.props.title.length > 0) ? <button onClick={this.promptChangeTitle.bind(this)} className="btn btn-primary btn-reg pageform-button"> Change Title </button> : ""}  
              {(this.props.title.length > 0) ? <button onClick={this.promptDeleteBook.bind(this)} className="btn btn-primary btn-reg pageform-button"> Delete Book </button>  : "" }     
            </div>  
          </div>
        </div>
      </div>
    );
  }

  setTitle(title) {
    this.setState({title:title});
  }

  promptDeleteBook() {
    let book = Library.getCurrentBook();
    deleteEvent._book = book;
    deleteEvent.emit("delete-book");
  }

  promptChangeTitle() {
    let book = Library.getCurrentBook();
    createEvent._book = book;
    createEvent.emit('change-title');
  }
}

exports.TitleBar = TitleBar;