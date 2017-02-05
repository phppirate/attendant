<template>
	<div class="list-header"><slot></slot></div>
</template>

<script>
	export default {
		data(){
			return {};
		},
		props: [],
		methods: {}
	}
</script>

<style>
	.list-header{
		display: flex;
		align-items: center;
		padding: 0px 20px;
		height: 45px;
	}
</style>