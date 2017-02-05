<template>
	<div class="site-details">
		<list-header>Hidalgo 365</list-header>
		<div class="content">
			<div>Driver: LaravelValetDriver</div>
		</div>

		<div class="footer">
			<button class="btn">Open</button>
			<button class="btn is-green">Secure</button>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return {};
		},
		props: [],
		methods: {},
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
