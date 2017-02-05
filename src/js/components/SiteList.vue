<template>
	<div class="site-list" v-if="siteList">
		<item
			v-for="item in siteList"
			:class="activeSite == item ? 'active' : ''"
			@click="$emit('activate', item)"
			>{{ item.site }}</item>
	</div>
</template>

<script>
	export default {
		data(){
			return {};
		},
		props: ['siteList', 'activeSite'],
		methods: {},
		components: {
			'item': require("./SiteListItem")
		},
		mounted(){
			console.log('SiteList', this.siteList);
		}
	}
</script>

<style>
	.site-list{
		padding: 0px 10px;
		height: calc(100% - 50px);
		overflow-y: scroll; 
	}
</style>