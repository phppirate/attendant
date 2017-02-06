<template>
	<div class="site-details" v-if="activeSite">
		<list-header>{{ formatedName() }}</list-header>
		<div class="content">
			<div>Path: {{ activeSite.path }}</div>
			<div v-if="getDriver(activeSite.path)">Driver: {{ driver }}</div>
		</div>

		<div class="footer">
			<button class="btn" @click="openSite">Open</button>
			<button class="btn" @click="openFolder">Reveal</button>
			<button class="btn is-green">Secure</button>
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
