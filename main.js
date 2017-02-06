let electron = require('electron');
let {shell, Menu} = electron;
let exec = require('child_process').exec;
let app = electron.app;
let BrowserWindow = electron.BrowserWindow;
let mainWindow;

function init(){
	createMainWindow();
}

function createMainWindow(){
	mainWindow = new BrowserWindow({
		width: 700,
		height: 580
	});
	mainWindow.loadURL('file://' + __dirname + "/app/index.html");

	let template  = [
		{
			label: "Attendant",
			submenu: [
				{
					role: 'about'
				},
				{
					label: 'Toggle Developer Tools',
					accelerator: process.platform === 'darwin' ? 'Alt+Command+I' : 'Ctrl+Shift+I',
					click (item, focusedWindow) {
						if (focusedWindow) focusedWindow.webContents.toggleDevTools()
					}
				},
				{
					role: 'reload'
				},
				{
					role: 'quit'
				}
			]
		}
	];

	let menu = Menu.buildFromTemplate(template);
  	Menu.setApplicationMenu(menu);

}


app.on('ready', init);