import Vue from "vue";
import App from "./components/app.vue";

Vue.config.debug = true;

//new Vue(App);
new Vue({
	el: "#app",
	render: h=> h(App)
})
