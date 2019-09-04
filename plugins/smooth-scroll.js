import Vue from "vue";

import SmoothScroll from "smooth-scroll";
const smoothScroll = new SmoothScroll('a[href*="#"]', {
  speed: 500,
  offset: 56
});

Vue.prototype.$smoothScroll = smoothScroll;

console.log(Vue.prototype.$smoothScroll);
