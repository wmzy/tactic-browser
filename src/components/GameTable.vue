<template>
  <div :class="s.root">
    <v-card v-for="i in 7" :key="i" :class="s.chair">
      card {{ i }}
    </v-card>
    <v-card :class="s.showArea">
      show area
    </v-card>
    <div :class="s.userArea">
      <equipment-area :class="s.equipmentArea" v-bind="equipment" />
      <div :class="s.cardArea">
        <game-card v-for="(c, i) in cards" :key="i" v-bind="c" />
      </div>
      <div :class="s.warriorAard" />
    </div>
    <v-card :class="s.log">
      log
    </v-card>

  </div>
</template>

<script>
import GameCard from './GameCard.vue';
import EquipmentArea from './EquipmentArea.vue';

export default {
  name: 'GameTable',
  components: {
    GameCard,
    EquipmentArea
  },
  props: {
    role: {
      type: String,
      required: true
    },
    warrior: {
      type: String,
      required: true
    },
    equipment: {
      type: Object,
      default: null
    },
    cards: {
      type: Array,
      required: true
    },
    otherPlayers: {
      type: Array,
      required: true
    },
    state: {
      type: Object,
      required: true
    }
  }
};
</script>

<style module="s" lang="scss">
.root {
  height: 100%;
  min-height: 600px;
  display: grid;
  grid-template-rows: repeat(7, 1fr);
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 10px;

  .show-area {
    grid-column: 2 / 5;
    grid-row: 3 / 6;
  }

  .user-area {
    grid-column: 1 / 7;
    grid-row: 6 / 8;

    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 10px;

    .equipment-area {
      grid-column: 1 / 2;
    }

    .card-area {
      grid-column: span 4;
      display: block;
    }

    .warrior-card {
      grid-column: 6 / 7;
    }
  }

  .log {
    grid-column: 6;
    grid-row: 1 / 6;
  }

  .chair {
    grid-row: span 2;
  }

  .chair:first-child {
    grid-column: 1 / 2;
    grid-row: 4 / 6;
  }

  .chair:nth-child(2) {
    grid-column: 1 / 2;
    grid-row: 2 / 4;
  }

  .chair:nth-child(6) {
    grid-column: 5 / 6;
    grid-row: 2 / 4;
  }
  .chair:nth-child(7) {
    grid-column: 5 / 6;
    grid-row: 4 / 6;
  }
}
</style>
