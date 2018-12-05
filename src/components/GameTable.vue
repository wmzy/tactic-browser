<template>
  <div v-resize="handleResize" class="root">
    <v-card v-for="i in 7" :key="i" class="chair">
      card {{ i }}
    </v-card>
    <v-card class="show-area">
      show area
    </v-card>
    <v-card class="user-area">
      user area
    </v-card>
    <v-card class="log">
      log
    </v-card>

  </div>
</template>

<script>
export default {
  name: 'GameTable',
  props: {
    state: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      width: 0,
      height: 0
    };
  },
  mounted() {
    this.handleResize();
  },
  methods: {
    handleResize() {
      const {width, height} = this.$el.getBoundingClientRect();
      this.width = width;
      this.height = height;
    }
  }
};
</script>

<style scoped lang="scss">
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
