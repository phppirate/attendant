import Vue from 'vue';

new Vue({
	components: {
		'status-bar': require('./components/StatusBar'),
		'list-header': require('./components/ListHeader'),
		'site-list': require('./components/SiteList'),
		'site-details': require('./components/SiteDetails'),
	}
}).$mount('#app');