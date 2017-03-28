const React = require("react");
const ReactDOM = require("react-dom");
var TitleBar = require("./TitleBar/TitleBar").TitleBar;
var BookList = require("./BookList/BookList").BookList;
var PageForm = require("./PageForm/PageForm").PageForm;
var ContextList = require("./ContextList/ContextList").ContextList;
var CreateBook = require("./createBook/createBook").CreateBook;
var ChangeTitle = require("./ChangeTitle").ChangeTitle;

class Layout extends React.Component {
  constructor() {
    super();
    this.state = {pageIndex: 1, pageText: ""};
    console.log(this.state);
    deleteEvent.updatePage = this.gotoPreviousPage.bind(this);
    console.log(deleteEvent);
  }

  render() {
    return (
      <div>
        <div id="TitleSection" className="col-xs-12 text-center l-shape"> <TitleBar title={Library !== undefined && Library.getBookList().length > 0 && Library.getCurrentBook() !== null ? Library.getCurrentBook().title : ''} /></div>
        <div id="BookList" className="col-xs-3 contents"> <BookList resetPageIndex={this.resetPageIndex.bind(this)} booklist={Library.getBookList()}/></div>
        <div id="PageForm" className="col-xs-9 contents"> <PageForm fncs={this}/></div>
        <div id="CreateBookForm"> <CreateBook /></div>
        <div id="ChangeTitlePrompt"> <ChangeTitle /> </div>
      </div>
    );
  }

  newPage() {
    let book = Library.getCurrentBook();
    if(book !== null) {
      book.pages.splice(this.state.pageIndex, 0, { pageNumber: this.state.pageIndex, pageText: "New Empty Page" });
      console.log("Page added");
    }
  }

  deletePage() {
    let book = Library.getCurrentBook();
    if(book !== null) {
      deleteEvent._pageIndex = this.state.pageIndex - 1;
      deleteEvent.emit("delete-page");
    }
  }

  gotoPreviousPage() {
    console.log("Previous Page");
    let book = Library.getCurrentBook();
    if(book !== null && (this.state.pageIndex - 1) > 0) {
      console.log(this.state.pageIndex - 1);
      this.setState({pageIndex: this.state.pageIndex - 1},() => {
        this.setState({pageText: book.pages[this.state.pageIndex - 1].pageText}, ()=>{
          this.updatePageText();
        });  
      });    
    }
  }

  gotoNextPage() {
    console.log("Next Page");
    let book = Library.getCurrentBook();
    if(book !== null && (this.state.pageIndex - 1) < book.pages.length - 1) {
      this.setState({pageIndex: this.state.pageIndex + 1},() => {
        this.setState({pageText: book.pages[this.state.pageIndex - 1].pageText}, ()=>{
          this.updatePageText();
        });  
      });
    }
  }

  saveEdit() {
    let book = Library.getCurrentBook();
    if(book !== null) {
      book.pages[this.state.pageIndex - 1].pageText = $("#pageTextInfo")[0].value;
      console.log("Saved Edit");
      console.log(book);
    }
  }


  updatePageText() {
    $("#pageTextInfo")[0].value = this.state.pageText;
    $("#PageNumber")[0].textContent = `Page: ${this.state.pageIndex}`;
  }

  resetPageIndex() {
    console.log("Reset Page Index");
    this.setState({pageIndex: 1});
    this.forceUpdate(()=>{
      $("#PageNumber")[0].textContent = `Page: ${this.state.pageIndex}`;
    });
  }
}

const layout = ReactDOM.render(<Layout />, $("#Layout")[0]);

setInterval(()=> {
  ReactDOM.render(<Layout />, $("#Layout")[0]);
}, 1000);