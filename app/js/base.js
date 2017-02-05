let dirName = __dirname;
let eRequire = require;
let fs = require('fs');
let shell = require('electron').shell;
let config, sites;

console.log(fs);

let basePath = dirName.split('/');
basePath = "/" + basePath[1] + "/" + basePath[2] + "/.valet";
reloadBase();

fs.watchFile(basePath + '/config.json', reloadBase);

function reloadBase(){
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

	window.app.$emit ? window.app.$emit('reload-base'): "";
}