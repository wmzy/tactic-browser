<template>
  <div>
    {{ weapon.name }}
  </div>
</template>

<script>
export default {
  name: 'EquipmentArea',
  props: {
    weapon: {
      type: Object,
      default: null
    }
  }
};
</script>

<style scoped>
</style>
