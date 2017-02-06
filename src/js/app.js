import Vue from 'vue';

window.app = new Vue({
	el: "#app",
	data: {
		config: {},
		siteList: [],
		activeSite: null
	},
	components: {
		'status-bar': require('./components/StatusBar'),
		'list-header': require('./components/ListHeader'),
		'site-list': require('./components/SiteList'),
		'site-details': require('./components/SiteDetails'),
	},
	methods: {
		activateSite(site){
			console.log('Activate');
			this.activeSite = site;
		},
		loadBase(){
			this.config = config;
			this.siteList = sites;
		},
		updateRunning(running){
			this.running = running;
		}
	},
	mounted(){
		this.$on('reload-base', this.loadBase);
		this.$on('update-running', this.updateRunning);
	}
});