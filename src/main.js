import 'material-design-icons-iconfont/dist/material-design-icons.css';
import axios from 'axios';
import Vue from 'vue';
import Vuetify, {
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
  VContent,
  VDialog,
  VForm,
  VApp // required
} from 'vuetify/lib';
import {Ripple, Resize} from 'vuetify/lib/directives';
import 'vuetify/src/stylus/app.styl';
import App from './App.vue';
import router from './router';
import './registerServiceWorker';

axios.defaults.baseURL = process.env.VUE_APP_API;

Vue.use(Vuetify, {
  components: {
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
    VContent,
    VDialog,
    VForm,
    VApp
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
