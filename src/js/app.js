import Vue from 'vue';

let timeout;

window.app = new Vue({
	el: "#app",
	data: {
		config: {},
		siteList: [],
		activeSite: null,
		dropdownOpen: false,
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
		},
		toggleDropdown(){
			this.dropdownOpen = !this.dropdownOpen;
		},
		hideDropdown(){
			timeout = setTimeout(() => {
				this.dropdownOpen = false;
			}, 500);
		},
		hoverDropdown(){
			clearTimeout(timeout);
		}
	},
	mounted(){
		this.$on('reload-base', this.loadBase);
		this.$on('update-running', this.updateRunning);
	}
});