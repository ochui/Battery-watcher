const path = require('path');
const url = require('url');

const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;


let win  = null;

function createWindow() {
    win = new BrowserWindow({
      width: 302, 
      height: 390, 
      minWidth: 302, 
      minHeight: 390, 
    });
  
    win.loadURL(url.format({
      pathname: path.join(__dirname, 'src/app.html'), 
      protocol: 'file:', 
      slashes: true 
    }));
  } 
  
  // Create window on electron intialization
  app.on('ready', createWindow)
  // Quit when all windows are closed.
  app.on('window-all-closed', function () {
    // On macOS specific close process
    if (process.platform !== 'darwin') {
      app.quit()
    }
  })
  app.on('activate', function () {
    // macOS specific close process
    if (win === null) {
      createWindow()
    }
  })