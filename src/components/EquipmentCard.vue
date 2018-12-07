<template>
  <div :class="$style.root">
    <div>
      <span>🏹 </span>
      <span>{{ distance }}</span>
    </div>
    <span>{{ name }}</span>
    <div :style="{color}">
      <span>{{ rankView }} </span>
      <span>{{ suitMap[suit] }}</span>
    </div>
  </div>
</template>

<script>
import GameCard from './GameCard.vue';

export default {
  name: 'EquipmentCard',
  extends: GameCard,
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

<style module lang="scss">
.root {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
