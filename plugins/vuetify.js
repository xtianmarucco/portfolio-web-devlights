import Vue from 'vue';
import { Vuetify, VApp, VGrid, transitions } from 'vuetify';
import {
  VFlex,
  VLayout,
  VNavigationDrawer,
  VList,
  VListTile,
  VListTileAction,
  VListTileContent,
  VListTileTitle,
  VIcon,
  VToolbar,
  VToolbarTitle,
  VToolbarItems,
  VBtn,
  VSpacer,
  VContent,
  VContainer,
  VCard,
  VCardText,
  VCardActions,
  VTextField,
  VDivider,
  VAutocomplete,
  VForm,
  VBreadcrumbs,
  VChip,
  VAvatar,
  VBottomNav,
  VFooter,
  VImg,
  VSelect,
  VCardTitle,
  VSubheader,
  VListTileAvatar,
  VListTileSubTitle,
  VDialog,
  VTextarea,
  VCombobox
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
    VNavigationDrawer,
    VList,
    VListTile,
    VListTileAction,
    VListTileContent,
    VListTileTitle,
    VIcon,
    VToolbar,
    VToolbarTitle,
    VToolbarItems,
    VBtn,
    VSpacer,
    VContent,
    VContainer,
    VCard,
    VCardText,
    VCardActions,
    VTextField,
    VDivider,
    VAutocomplete,
    VForm,
    VBreadcrumbs,
    VChip,
    VAvatar,
    VBottomNav,
    VFooter,
    VImg,
    VSelect,
    VCardTitle,
    VSubheader,
    VListTileAvatar,
    VListTileSubTitle,
    VDialog,
    VTextarea,
    VCombobox
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
