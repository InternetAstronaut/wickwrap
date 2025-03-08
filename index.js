const { app, BrowserWindow, dialog } = require('electron');

function createWindow() {
    const win = new BrowserWindow({
        width: 1500,
        height: 800,
        webPreferences: {
            sandbox: true,
            devTools: false
        }
    });
    win.loadURL('https://stickmanred.github.io/wick-editor/');
    win.setMenu(null);
    const { dialog } = require('electron');

    win.on('close', function () {
        let response = dialog.showMessageBoxSync(this, {
            type: 'question',
            buttons: ['Yes', 'No'],
            title: 'Confirm',
            message: 'Are you sure you want to quit?'
        });

        if(response == 0) win.destroy();
    });
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});