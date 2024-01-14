// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import axios from "axios";
axios.defaults.baseURL = "/api"
Vue.prototype.$http = axios;
/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  template: "<App/>",
  components: { App },
});
// Vue.filter("formatDate", function (str) {
//   if (!str) return "";
// });
