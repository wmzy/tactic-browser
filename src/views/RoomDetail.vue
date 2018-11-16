<template>
  <v-container 
    fluid 
    class="root"
  >
    <v-layout>
      <v-flex>
        <v-btn @click="handleCreateClick">新建</v-btn>
      </v-flex>
    </v-layout>
    <game-table />
  </v-container>
</template>

<script>
import GameTable from '@/components/GameTable.vue';

export default {
  components: {GameTable},
  methods: {
    handleCreateClick() {
      this.$router.push({path: '/rooms/1'});
    }
  }
};
</script>
