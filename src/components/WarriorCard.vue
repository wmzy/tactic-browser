<template>
  <div :class="s.root">
    <div>
      {{ name }}

      <equipment-area />
    </div>
    <game-progress />
  </div>
</template>

<script>
import GameProgress from '@/components/GameProgress.vue';
import EquipmentArea from '@/components/EquipmentArea.vue';

export default {
  name: 'WarriorCard',
  components: {
    GameProgress,
    EquipmentArea
  },
  props: {
    name: {
      type: String,
      required: true
    }
  }
};
</script>

<style module="s" lang="scss">
</style>
