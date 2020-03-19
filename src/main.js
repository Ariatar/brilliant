import Vue from "vue";
import Carousel3d from "vue-carousel-3d";
import VueYoutube from "vue-youtube";
import "../public/scss/main.scss";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import "./registerServiceWorker";
import router from "./router";

Vue.use(Carousel3d);
Vue.use(VueYoutube);
Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  render: h => h(App),
}).$mount("#app");
