import Vue from 'vue'
import routes from './routes'
import Vuex from 'vuex'

Vue.use(Vuex);

const app = new Vue({
	el: '#app',
	data: {
		currentRoute: window.location.pathname
	},
	computed: {
	ViewComponent () {
		const matchingView = routes[this.currentRoute]
		return matchingView
			? require('./pages/' + matchingView + '.vue')
			: require('./pages/404.vue')
	}
	},
	render (createElement) {
		return createElement(this.ViewComponent)
	}
})

window.addEventListener('popstate', () => {
 	app.currentRoute = window.location.pathname
})