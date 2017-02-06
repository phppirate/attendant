let dirName = __dirname;
let eRequire = require;
let fs = require('fs');
let shell = require('electron').shell;
let exec = require('child_process').exec;
let config, sites, valetVersion;

console.log(fs);

let basePath = dirName.split('/');
basePath = "/" + basePath[1] + "/" + basePath[2] + "/.valet";
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
		exec('valet -V', function(error, stdout, stderr) {
			resolve(stdout);
		});
	});
}

function valet_which(path){
	return new Promise(function(resolve, reject) {  
		exec('valet which', {cwd: path}, function(error, stdout, stderr) {
			resolve(stdout.split('[')[1].split(']')[0]);
		});
	});
}