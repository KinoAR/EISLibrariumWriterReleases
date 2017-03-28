const mainWindow = require("../main.js");


const template = [
  {
    label: 'File',
    submenu: [
      {
        label: 'Open Librarium File',
        click() {
          let ipc = require('electron').ipcMain;
          let dialog = require('electron').dialog;
          dialog.showOpenDialog({
            properties:['openFile'],
            filters: [
              {name: 'Librarium File', extensions: ['json']},
            ]
          }, (files) => {
            if(files !== undefined) {
              let fs = require("fs");
              let data = fs.readFileSync(files[0], 'utf8');
              mainWindow.windowContents().send('get-Librarium-file', data);
            }  
          });
        }
      }, {
        label: 'Save Librarium File',
        click() {
          let ipc = require("electron").ipcMain;
          let dialog = require('electron').dialog;
          let filepath = dialog.showSaveDialog({
            filters: [
              {name: 'Librarium File', extensions: ['json']},
            ]
          }, (fileName) => {
            
            mainWindow.windowContents().send("save-Librarium-file");
            ipc.on('complete-file-save',(event, arg) =>{
              let fs = require("fs");
              fs.writeFileSync(`${fileName}`,arg, 'utf8');
            });     
         
          });
        }
      }
    ]
  },
  {
    label: 'Edit',
    submenu: [
      {
        role: 'undo',
        accelerator: 'CmdOrCtrl+Z'
      },
      {
        role: 'redo',
        accelerator: 'CmdOrCtrl+Y'
      },
      {
        type: 'separator'
      },
      {
        role: 'cut',
        accelerator: 'CmdOrCtrl+X'
      },
      {
        role: 'copy',
        accelerator: 'CmdOrCtrl+C'
      },
      {
        role: 'paste',
        accelerator: 'CmdOrCtrl+V'
      },
      {
        role: 'pasteandmatchstyle'
      },
      {
        role: 'delete'
      },
      {
        role: 'selectall'
      }
    ]
  },
  {
    label: 'View',
    submenu: [
      {
        role: 'reload'
      },
      {
        type: 'separator'
      },
      {
        role: 'resetzoom'
      },
      {
        role: 'zoomin'
      },
      {
        role: 'zoomout'
      },
      {
        type: 'separator'
      },
      {
        role: 'togglefullscreen'
      }
    ]
  },
  {
    role: 'window',
    submenu: [
      {
        role: 'minimize'
      },
      {
        role: 'close'
      },
    ]
  },
  {
    role: 'help',
    submenu: [
      {
        label: 'Learn More',
        click () { require('electron').shell.openExternal('http://electron.atom.io');}
      }
    ]
  }
];

if (process.platform === 'darwin') {
  template.unshift({
    label: app.getName(),
    submenu: [
      {
        role: 'about'
      },
      {
        type: 'separator'
      },
      {
        role: 'services',
        submenu: []
      },
      {
        type: 'separator'
      },
      {
        role: 'hide'
      },
      {
        role: 'hideothers'
      },
      {
        role: 'unhide'
      },
      {
        type: 'separator'
      },
      {
        role: 'quit'
      }
    ]
  });
  // Edit menu.
  template[1].submenu.push(
    {
      type: 'separator'
    },
    {
      label: 'Speech',
      submenu: [
        {
          role: 'startspeaking'
        },
        {
          role: 'stopspeaking'
        }
      ]
    }
  );
  // Window menu.
  template[3].submenu = [
    {
      label: 'Close',
      accelerator: 'CmdOrCtrl+W',
      role: 'close'
    },
    {
      label: 'Minimize',
      accelerator: 'CmdOrCtrl+M',
      role: 'minimize'
    },
    {
      label: 'Zoom',
      role: 'zoom'
    },
    {
      type: 'separator'
    },
    {
      label: 'Bring All to Front',
      role: 'front'
    }
  ];
}

exports.template = template;