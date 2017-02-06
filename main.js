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
}


app.on('ready', init);