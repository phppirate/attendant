<template>
	<div :class="['site', active ? 'active' : '']">
		<div class="hover-item"><slot></slot></div>
		<div class="flex-1"></div>
	</div>
</template>

<script>
	export default {
		data(){
			return {};
		},
		props: {
			'active': {
				default: false
			}
		},
		methods: {}
	}
</script>

<style scoped>
	.site{
		width: auto;
		display: flex;
		color: #666;
	}
	.site .hover-item{
		display: flex;
		align-items: center;
		height: 30px;
		padding: 0 10px;
		border-radius: 30px;
	}
	.site:hover .hover-item{
		background: #FF8879;
		color: #fff;
	}
	.site.active .hover-item{
		background: #FB503B;
		color: #fff;
	}
</style>