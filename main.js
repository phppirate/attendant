let electron = require('electron');
let app = electron.app;
let BrowserWindow = electron.BrowserWindow;
let mainWindow;

function init(){
	createMainWindow();
}

function createMainWindow(){
	mainWindow = new BrowserWindow({
		width: 570,
		height: 580
	});
	mainWindow.loadURL('file://' + __dirname + "/app/index.html");
}

app.on('ready', init);