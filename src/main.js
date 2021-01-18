import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueScrollTo from "vue-scrollto";
import AOS from "aos";
import "aos/dist/aos.css";
import VueCarousel from "vue-carousel";
import VueMq from "vue-mq";
import titleMixin from "@/mixins/titleMixin";
import VueCompositionAPI from "@vue/composition-api";

Vue.use(VueCompositionAPI);
Vue.mixin(titleMixin);

Vue.use(VueMq, {
  breakpoints: {
    mobile: 450,
    tablet: 900,
    laptop: 1024,
    desktop: Infinity,
  },
});

Vue.use(VueCarousel);

AOS.init({
  once: true,
  offset: 150,
  duration: 500,
});

Vue.use(VueScrollTo, {
  offset: 10,
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
