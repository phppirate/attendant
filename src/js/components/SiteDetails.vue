<template>
	<div class="site-details" v-if="activeSite">
		<list-header>{{ formatedName() }}</list-header>
		<div class="content">
			<div>Path: {{ activeSite.path }}</div>
			<div>Driver: LaravelValetDriver</div>
		</div>

		<div class="footer">
			<button class="btn" @click="openSite">Open</button>
			<button class="btn is-green">Secure</button>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return {};
		},
		props: ['activeSite'],
		methods: {
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
