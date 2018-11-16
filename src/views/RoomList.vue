<template>
  <div class="root">
    <v-btn @click="handleCreateClick">新建</v-btn>
  </div>
</template>

<script>
export default {
  methods: {
    handleCreateClick() {
      this.$router.push({path: '/rooms/1'});
    }
  }
};
</script>
