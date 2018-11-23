import 'material-design-icons-iconfont/dist/material-design-icons.css';
import Vue from 'vue';
import Vuetify, {
  VApp, // required
  VCard,
  VLayout,
  VNavigationDrawer,
  VFooter,
  VToolbar,
  VIcon,
  VFlex,
  VBtn,
  VDivider,
  VTextField,
  VToolbarSideIcon,
  VSpacer,
  VSubheader,
  VList,
  VListTileAction,
  VListTileContent,
  VListTileTitle,
  VListTile,
  VProgressLinear,
  VContainer,
  VContent
} from 'vuetify/lib';
import {Ripple, Resize} from 'vuetify/lib/directives';
import 'vuetify/src/stylus/app.styl';
import App from './App.vue';
import router from './router';
import './registerServiceWorker';

Vue.use(Vuetify, {
  components: {
    VApp,
    VCard,
    VLayout,
    VNavigationDrawer,
    VFooter,
    VToolbar,
    VIcon,
    VFlex,
    VBtn,
    VDivider,
    VTextField,
    VToolbarSideIcon,
    VSpacer,
    VSubheader,
    VList,
    VListTileAction,
    VListTileTitle,
    VListTileContent,
    VListTile,
    VProgressLinear,
    VContainer,
    VContent
  },
  directives: {
    Ripple,
    Resize
  }
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
