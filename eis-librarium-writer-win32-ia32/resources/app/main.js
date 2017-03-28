const electron = require("electron");
const {app, BrowserWindow, Menu, ipcMain} = electron;
const {template} = require("./Menu/Menu.js");
var mainWindow = null;

app.on('window-all-closed', () => {
  app.quit();
}); 

app.on('ready', () => {
  let win = new BrowserWindow({width:1024, height:720, icon:'./EISIco.png'});
  mainWindow = win;
  win.loadURL(`file://${__dirname}/index.html`);
  
  win.on('close', () =>{win = null;}); 
  Menu.setApplicationMenu(Menu.buildFromTemplate(template));
});


Object.assign(exports, {
  openWindow() {
    let win = new BrowserWindow({width:400, height:300});
    win.loadURL(`file://${__dirname}/package.json`);
  },
  windowContents() {
    return mainWindow.webContents;
  }
});

// exports = mainWindow;

/* Main Hooks */
ipcMain.on('deletebook-prompt', (event, arg) => {
  let dialog = require('electron').dialog;
  dialog.showMessageBox(mainWindow,{ type: 'question', buttons: ['Yes', 'No'], message: `Are you sure you want to delete this book?` },
    (response) => {
      if(response === 0) {
        event.sender.send('delete-book', arg);
      }
    }); 
});

ipcMain.on('deletepage-prompt', (event, arg) => {
  let dialog = require("electron").dialog;
  dialog.showMessageBox(mainWindow, { type: 'question', buttons: ['Yes', 'No'], message: `Are you sure you want to delete this page?` },
    (response) => {
      if(response == 0) {
        event.sender.send('delete-page', arg);
      }
    });
});


exports.electron = electron;