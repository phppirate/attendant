<template>
	<div class="title-bar">
		<div class="title-bar-buttons">
			<div class="title-bar-btn red" @click="closeWindow"></div>
			<div class="title-bar-btn yellow" @click="minimizeWindow"></div>
			<div class="title-bar-btn green" @click="maximizeWindow"></div>
		</div>
	</div>
</template>

<script>
	export default {
		data: () => ({}),
		props: [],
		methods: {
			minimizeWindow(){
				currentWindow.minimize();
			},
			maximizeWindow(){
				if(!currentWindow.isMaximized()){
					currentWindow.maximize();
				} else {
					currentWindow.unmaximize();
				}
			},
			closeWindow(){
				currentWindow.close()
			},
		},
		mounted(){
		}
	}
</script>

<style lang="scss">
	.title-bar{
		-webkit-user-select: none;
		-webkit-app-region: drag;
		display: flex;
		align-items: center;
		height: 24px;
		width: 100%;
		background: #fff;
		border-bottom: 1px solid #E9E9E9;
		.title-bar-buttons{
			display: flex;
			padding-left: 10px;
			width: 57px;
			justify-content: space-between;
		}

		.title-bar-btn {
			width: 12px;
			height: 12px;
			border-radius: 12px;
			background: #E9E9E9;
			-webkit-app-region: no-drag;

			&.red{ background: #D0011B; }
			&.green{ background: #7ED321; }
			&.yellow{ background: #F8E81C; }
			&:hover{
				box-shadow: 0 0 0 2px #E9E9E9;
			}
		}
	}
</style>