let dirName = __dirname;
let eRequire = require;
let fs = require('fs');
let shell = require('electron').shell;
let exec = require('child_process').exec;
let config, sites, valetVersion;

console.log(fs);

let basePath = dirName.split('/');
basePath = process.env.HOME + "/.valet";
reloadBase();

// fs.watchFile(basePath + '/config.json', reloadBase);

function reloadBase(){
	valet_version().then((v) => {
		console.log("Reloading Base");
		config = JSON.parse(fs.readFileSync(basePath + "/config.json"));
		sites = [];
		config.paths.forEach((path) => {
			fs.readdir(path, (err, files) => {
				files.forEach((file) => {
					if(file == ".DS_Store") return;
					let obj = {
						site: file + "." + config.domain,
						path: path + "/" + file
					};
					sites.push(obj);
				});
			});
		});

		config.version = v;
		
		window.app.$emit ? window.app.$emit('reload-base'): "";
	});

}


function valet_version(){
	return new Promise(function(resolve, reject) {  
		console.log('Home', process.env.HOME);
		exec('sudo /usr/local/bin/valet -V', {cwd: process.env.HOME + "/"}, function(error, stdout, stderr) {
			console.log(error);
			resolve(stdout);
		});
	});
}

function valet_which(path){
	return new Promise(function(resolve, reject) {  
		exec('sudo /usr/local/bin/valet which', {cwd: path}, function(error, stdout, stderr) {
			console.log(error);
			resolve(stdout.split('[')[1].split(']')[0]);
		});
	});
}

function valet_restart(){
	return new Promise(function(resolve, reject) {  
		exec('sudo /usr/local/bin/valet restart', {cwd: process.env.HOME}, function(error, stdout, stderr) {
			console.log(error);
			resolve(stdout);
		});
	});
}

function valet_running(){
	console.log(process.env.HOME + "/.valet/valet.sock");
	return fs.existsSync(process.env.HOME + "/.valet/valet.sock") ? true : false;
}