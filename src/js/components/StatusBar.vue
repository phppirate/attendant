<template>
	<div class="status-bar">
		<div class="section">
			<div v-if="running">
				<div class="indicator green"></div> Running
			</div>
			<div v-else>
				<div class="indicator red"></div> Stopped
			</div>
		</div>
		<div class="section">
			{{ siteList.length }} Sites
		</div>
		<div class="section">
			{{ version }}
		</div>
		<button class="section" ref="restartBtn" @click="restartValet">
			<span v-if="!starting">Restart</span>
			<span v-else>Restarting</span>
		</button>
		<button class="section" ref="stopStartBtn" @click="toggleValet">
			<div v-if="!starting && !stopping">
				<span v-if="!running">Start</span>
				<span v-else>Stop</span>
			</div>
			<div v-if="starting">
				<span>Starting</span>
			</div>
			<div v-if="stopping">
				<span>Stopping</span>
			</div>
		</button>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				starting: false,
				stopping: false,
				running: false
			};
		},
		props: ['version', 'siteList'],
		methods: {
			restartValet(){
				this.stopping = true;
				valet_stop()
					.then(r => {
						console.log(r);
						this.running = false;
						this.stopping = false;
						this.starting = true;
						valet_start().then(()=>{
							this.starting = false;
							this.getRunning();
						});
					});
			},
			toggleValet(){
				if(this.running){
					this.stopping = true;
					valet_stop().then(() => {
						this.stopping = false;
						this.running = false;
					});
				} else {
					this.starting = true;
					valet_start().then(() => {
						this.starting = false;
						this.running = true;
					});
				}
			},
			getRunning(){
				this.running = valet_running();
			}
		},
		mounted(){
			this.getRunning();
		}
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
		background: #666;
		display: inline-block;
	}
	.indicator.green{
		background: #7ED321;
	}
	.indicator.red{
		background: #f00;
	}
</style>