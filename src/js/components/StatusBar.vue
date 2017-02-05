<template>
	<div class="status-bar">
		<div class="section">
			<div class="indicator green"></div> Running
		</div>
		<div class="section">
			15 Sites
		</div>
		<div class="section">
			Valet v2.4
		</div>
		<button class="section">
			Restart
		</button>
	</div>
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

<style lang="scss">
	.status-bar{
		width: 100%;
		display: flex;
		border-bottom: 1px solid #E9E9E9;
	}
	.status-bar .section{
		justify-content: center;
		background: #fff;
		border: none;
		height: 64px;
		display: flex;
		align-items: center;
		padding: 0px 20px;
	}
	.status-bar button.section{
		flex: 1;
		color: #FB503B;
	}
	.status-bar .section:not(:last-child){
		border-right: 1px solid #E9E9E9;
	}
	.indicator{
		margin-right: 10px;
		width: 17px;
		height: 17px;
		border-radius: 17px;
		background: #7ED321;
		display: inline-block;
	}
</style>