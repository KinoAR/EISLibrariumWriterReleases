const remote = require("electron").remote;
const main = remote.require("./main.js");
const ipcRenderer = require("electron").ipcRenderer;
const deleteEvent = require("./AppEvents").deleteEvent;
const createEvent = require("./AppEvents").createEvent;

ipcRenderer.on('get-Librarium-file', (event, data)=> {
  Library.setBookList(JSON.parse(data));
});

ipcRenderer.on('save-Librarium-file', (event) => {
  let data = Library.getBookList();
  require("electron").ipcRenderer.send('complete-file-save', JSON.stringify(data, null, "\t"));
});

ipcRenderer.on('delete-book', (event, arg)=>{
  console.log(arg);
  let book = JSON.parse(arg);
  Library.deleteBook(book);
  Library.setCurrentBook(null);
  console.log(Library.getBookList());
});

ipcRenderer.on('delete-page', (event, arg) => {
  let pageIndex = parseInt(arg);
  Library.getCurrentBook().pages.splice(pageIndex, 1);
  deleteEvent.updatePage();
});

deleteEvent.on('delete-book', () => {
  console.log("Acitvated");
  ipcRenderer.send('deletebook-prompt', JSON.stringify(deleteEvent._book));
});

deleteEvent.on('delete-page', () => {
  console.log("Page Deleted");
  ipcRenderer.send('deletepage-prompt', deleteEvent._pageIndex);
});

