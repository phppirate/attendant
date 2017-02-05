<template>
	<div class="site-list">
		<item :active="true">hidalgo365.dev</item>
		<item>policycontroller.dev</item>
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
			'item': require("./SiteListItem")
		}
	}
</script>

<style>
	.site-list{
		padding: 0px 10px;
	}
</style>