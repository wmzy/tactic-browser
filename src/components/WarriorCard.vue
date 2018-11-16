<template>
  <div class="root">
    <div>
      {{ name }}

      <equipment-area />
    </div>
    <game-process />
  </div>
</template>

<script>
import GameProcess from '@/components/GameProcess.vue';
import EquipmentArea from '@/components/EquipmentArea.vue';

export default {
  name: 'WarriorCard',
  components: {
    GameProcess,
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

<style scoped lang="scss">
</style>
