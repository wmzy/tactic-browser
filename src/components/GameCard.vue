<template>
  <div :class="s.root" :style="{backgroundImg: '#', color}">
    <div>{{ rankView }}</div>
    <div>{{ suitMap[suit] }}</div>
  </div>
</template>

<script>
export default {
  name: 'GameCard',
  props: {
    name: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    distance: {
      type: Number,
      default: 0
    },
    suit: {
      type: String,
      required: true
    },
    rank: {
      type: Number,
      required: true
    }
  },
  computed: {
    color() {
      return ['heart', 'diamond'].includes(this.suit) && 'red';
    },
    rankView() {
      if (this.rank === 1) return 'A';
      if (this.rank > 10) return 'JQK'.charAt(this.rank - 11);
      return this.rank;
    }
  },
  created() {
    this.suitMap = {
      heart: '♥️',
      diamond: '♦️',
      spade: '♠️',
      club: '♣️'
    };
  }
};
</script>

<style module="s" lang="scss">
.root {
  width: 10em;
  height: 16.18em;
  border: solid 1px black;
}
</style>
