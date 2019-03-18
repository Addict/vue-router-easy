import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable */
new Vue({
	el: '#app',
	router,
	components: { App },
	template: '<App/>'
	render: h => h(App)
}).$mount('#app')
