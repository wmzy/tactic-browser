<template>
  <v-app id="app">
    <v-navigation-drawer
      v-model="drawer"
      fixed
      clipped
      class="grey lighten-4"
      app
    >
      <v-list
        dense
        class="grey lighten-4"
      >
        <template v-for="(item, i) in items">
          <v-layout
            v-if="item.heading"
            :key="i"
            row
            align-center
          >
            <v-flex xs6>
              <v-subheader v-if="item.heading">
                {{ item.heading }}
              </v-subheader>
            </v-flex>
            <v-flex 
              xs6 
              class="text-xs-right"
            >
              <v-btn 
                small 
                flat
              >edit</v-btn>
            </v-flex>
          </v-layout>
          <v-divider
            v-else-if="item.divider"
            :key="i"
            dark
            class="my-3"
          />
          <v-list-tile
            v-else
            :key="i"
            :to="item.link"
          >
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title class="grey--text">
                {{ item.text }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar 
      color="amber" 
      app 
      absolute 
      clipped-left
    >
      <v-toolbar-side-icon @click.native="drawer = !drawer" />
      <span class="title ml-3 mr-5">三国&nbsp;<span class="font-weight-light">杀</span></span>
      <v-text-field
        solo-inverted
        flat
        hide-details
        label="Search"
        prepend-inner-icon="search"
      />
      <v-spacer />
    </v-toolbar>
    <v-content>
      <v-container 
        fluid 
        fill-height 
        class="grey lighten-4"
      >
        <router-view />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: null
  }),
  created() {
    this.items = [
      {icon: 'home', text: '首页', link: '/'},
      {icon: 'lightbulb_outline', text: '消息', link: '/notes'},
      {icon: 'account_balance', text: '房间', link: '/rooms'},
      {divider: true},
      {icon: 'settings', text: '设置', link: '/settings'},
      {icon: 'help', text: '帮助', link: 'help'}
    ];
  }
};
</script>

<style lang="scss">
#app {
  .v-navigation-drawer__border {
    display: none;
  }

  .text {
    font-weight: 400;
  }
}
</style>
