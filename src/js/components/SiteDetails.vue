<template>
	<div class="site-details" v-if="activeSite">
		<list-header>{{ formatedName() }}</list-header>
		<div class="content">
			<div>Path: {{ activeSite.path }}</div>
			<div v-if="getDriver(activeSite.path)">Driver: {{ driver }}</div>
		</div>

		<div class="footer">
			<div>
				<button class="btn" @click="openSite">Open</button>
				<button class="btn" @click="openFolder">Reveal</button>
				<button class="btn is-red" @click="forgetOrUnlink()">
					<span v-if="isLinked()">Un-link</span>
					<span v-if="isParked()">Forget</span>
				</button>
			</div>
			<div style="margin-top: 10px;">
				<button class="btn is-green" @click="openInSublime">Open Sublime Text</button>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				driver: null
			};
		},
		props: ['activeSite'],
		methods: {
			getDriver(path){
				valet_which(path)
					.then((r) => {
						this.driver = r;
					});
				return true;
			},
			formatedName(){
				let formated = this.activeSite.site;
				formated = formated.split('.');
				delete formated[formated.length - 1];
				formated = formated.join('').split('-').map((string) => {
					return string[0] ? string[0].toUpperCase() + string.substr(1) : string;
				}).join(' ');
				return formated;
			},
			openSite(){
				console.log('Opening');
				shell.openExternal('http://' + this.activeSite.site);
			},
			openFolder(){
				console.log('Opening');
				shell.openItem(this.activeSite.path);
			},
			isLinked(){
				return this.activeSite.path.search('.valet/Sites') != -1;
			},
			isParked(){
				return !this.isLinked();
			},
			forgetOrUnlink(){
				if(this.isLinked()){
					valet_unlink(this.activeSite.path)
						.then(() => {
							this.activeSite = null;
							
							window.location.reload();
						});
				} else {
					let dirPath = this.activeSite.path.split('/');
					delete dirPath[dirPath.length-1];
					dirPath = dirPath.join('/');
					if(!confirm('Are you sure you want to do this? This will remove all the sites in this folder from Valet Park.')) return;
					valet_forget(dirPath)
						.then(r => {
							console.log(r);
							
							window.location.reload();
						});
				}
			},
			openInSublime(){
				open_sublime(this.activeSite.path);
			}
		},
		components: {
			"list-header": require("./ListHeader")
		}
	}
</script>

<style>
	.content{
		padding: 0px 20px;
		color: #666;
	}
	.footer{
		margin-top: 20px;
		padding: 10px 20px;
	}
</style>
