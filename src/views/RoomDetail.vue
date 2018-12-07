<template>
  <v-container 
    fluid 
  >
    <v-layout>
      <v-flex>
        info
      </v-flex>
    </v-layout>
    <game-table v-if="state === 'playing'" :cards="cards" :equipment="equipment" />
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
      cards: [
        {
          rank: 11,
          suit: 'heart',
          name: '杀',
          type: 'base'
        }
      ],
      equipment: {
        weapon: {
          name: '诸葛连弩',
          type: 'equipment',
          distance: 1,
          suit: 'club',
          rank: 1
        }
      },
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
