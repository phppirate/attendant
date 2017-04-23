<template>
	<div class="site-list" v-if="siteList && siteList.length">
		<item
			v-for="(item, key) in siteList"
			:class="activeSite == item ? 'active' : ''"
			@click="$emit('activate', item)"
			:key="key"
			>{{ item.site }}</item>
	</div>
	<div v-else class="site-list small">
		You do not have any sites yet.
		<br>
		Drag your code directory to park or link a file.
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
	.small{
		font-size: 15px;
		text-align: center;
		padding-top: 20px;
		color: #666;
	}
</style>