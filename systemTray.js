const path = require('path');

const electron = require('electron');
const app = electron.app;
const Menu = electron.Menu;
const Tray = electron.Tray;

var appIcon = null;
module.exports = {
    showTrayMenu: function () {
        appIcon = new Tray(path.join(__dirname, '/src/images/battery-icon.png'));
        var contextMenu = Menu.buildFromTemplate([{
                label: 'Settings',
                type: 'normal'
            },
            {
                label: 'About',
                type: 'normal'
            },
            {
                label: '',
                type: 'separator',
            },
            {
                label: 'Exit',
                type: 'normal',
                click() {
                    app.quit();
                }
            }
        ]);
        appIcon.setToolTip('This is my application.');
        appIcon.setContextMenu(contextMenu);
    }
}