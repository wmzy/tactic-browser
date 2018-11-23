<template>
  <v-container 
    fluid 
    class="root"
  >
    <v-layout>
      <v-flex>
        info
      </v-flex>
    </v-layout>
    <game-table v-if="state === 'playing'" />
    <v-progress-linear v-else :indeterminate="true" />
  </v-container>
</template>

<script>
import io from 'socket.io-client';
import GameTable from '@/components/GameTable.vue';

export default {
  components: {GameTable},
  data() {
    return {
      state: 'playing',
      gameState: {}
    };
  },
  created() {
    const token = 'xxx';
    this.socket = io({
      path: window.location.pathname,
      query: {token}
    });

    this.socket.on('state', this.handleStateChange);
    this.socket.on('game-state', this.handleStateChange);
  },
  destroyed() {
    this.socket.close();
  },
  methods: {
    handleStateChange(state) {
      this.state = state;
    },
    handleGameStateChange(state) {
      this.gameState = {...this.gameState, ...state};
    }
  }
};
</script>
