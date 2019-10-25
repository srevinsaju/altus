// Import custom titlebar module
const customTitlebar = require('custom-electron-titlebar');

// Import extra electron modules
const {
    app,
    process,
    Menu
} = require('electron').remote;
const {
    ipcRenderer
} = require('electron');

// Import electron store module for settings
const Store = require('electron-store');

// Load the main settings into settings variable
let settings = new Store({
    name: 'settings'
});

// Checks if custom titlebar is enabled in settings & the platform isn't a Mac
if (Array.from(settings.get('settings')).find(s => s.id === 'customTitlebar').value === true && process.platform !== 'darwin') {
    // Create main window titlebar
    const mainTitlebar = new customTitlebar.Titlebar({
        backgroundColor: customTitlebar.Color.fromHex('#202224'),
        icon: '../otherAssets/icon.ico',
        itemBackgroundColor: customTitlebar.Color.fromHex('#1c2028'),
        menu: process.platform === 'darwin' ? Menu.getApplicationMenu() : new Menu(),
        minimizable: false,
        maximizable: false,
        closeable: true
    });
    // Setting title explicitly
    mainTitlebar.updateTitle(`About Altus`);
}