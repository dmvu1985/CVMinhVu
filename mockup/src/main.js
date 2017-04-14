import "./css/flags/flags.min.css";
import Vue from "vue"; //ES6 modules
import application from "./app.vue";
import VueI18n from 'vue-i18n';
import VueRouter from "vue-router"; 


//router
import introdution from "./Components/Module/Introdution/Introdution.vue";
import home from "./Components/Module/Home/Home.vue";
import {messages} from "./config/localize.js";


Vue.use(VueI18n)

// set lang
Vue.config.lang = 'en'


const i18n = new VueI18n({
  locale: Vue.config.lang, // set locale
  messages, // set locale messages
});

const routers=[
  { path: '/Introdution', component: introdution  },
  { path: '/', component: home }
];

Vue.use(VueRouter);
const router = new VueRouter({
  routes: routers
 });

new Vue({
  el: '#app',
  router,
  components: {
    'app': application 
  },
  i18n
});

$(".owl-carousel").owlCarousel({
    margin: 10,
    loop: true,
    autoWidth: false,
    nav: true,
    dots: true,
    autoplay: true,
    items: 1,
    responsiveClass: true,
});

