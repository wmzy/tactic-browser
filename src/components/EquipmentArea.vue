<template>
  <div :class="s.root">
    <component :is="e ? 'equipment-card' : 'div'" v-for="(e, i) in [weapon, armor, defenseHorse, offenseHorse]" :key="i" v-bind="e" />
  </div>
</template>

<script>
import EquipmentCard from './EquipmentCard.vue';

export default {
  name: 'EquipmentArea',
  // eslint-disable-next-line vue/no-unused-components
  components: {EquipmentCard},
  props: {
    weapon: {
      type: Object,
      default: null
    },
    armor: {
      type: Object,
      default: null
    },
    defenseHorse: {
      type: Object,
      default: null
    },
    offenseHorse: {
      type: Object,
      default: null
    }
  }
};
</script>

<style module="s" lang="scss">
.root {
  display: grid;
  grid-template-rows: repeat(4, 1fr);
}
</style>
