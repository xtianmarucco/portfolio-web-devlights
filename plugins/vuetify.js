import Vue from 'vue';
import { Vuetify, VApp, VGrid, transitions } from 'vuetify';
import {
  VFlex,
  VLayout,
  VToolbar,
  VToolbarItems,
  VBtn,
  VIcon,
  VSpacer,
  VContent,
  VContainer,
  VCard,
  VImg,
  VSelect
} from 'vuetify/lib';

import { Ripple, Scroll, ClickOutside } from 'vuetify/es5/directives';
// import colors from 'vuetify/es5/util/colors';

Vue.use(Vuetify, {
  components: {
    VApp,
    VGrid,
    transitions,
    VFlex,
    VLayout,
    VToolbar,
    VToolbarItems,
    VBtn,
    VIcon,
    VSpacer,
    VContent,
    VContainer,
    VCard,
    VImg,
    VSelect
  },
  directives: {
    Ripple,
    Scroll,
    ClickOutside
  },
  options: {
    minifyTheme(css) {
      return css.replace(/[\s|\r\n|\r|\n]/g, '');
    }
  },

  theme: {
    primary: '#1867C0',
    secondary: '#F6914D',
    info: '#2196F3',
    warning: '#FB8C00',
    error: '#FF5252',
    success: '#4CAF50'
  }
});
