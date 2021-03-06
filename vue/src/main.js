// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

window.axios = axios;

window.axios.defaults.headers.common = {
    //'X-Requested-With': 'XMLHttpRequest',
    //'Access-Control-Allow-Origin': '*',
    //'Authorization': 'Basic cm9vdDpyb290',
    'Accept': 'application/hal+json',
    'Content-Type': 'application/hal+json',
    //'X-CSRF-TOKEN': 'rFaZFfsnV9D-4On08py37zF_cQU0BXTd0l_7VI4ze90'
};

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
