<template>
  <v-container 
    v-resize="handleResize" 
    fluid
    class="root"
  >
    <v-layout justify-space-between>
      <v-flex v-for="i in 5" :key="i" xs2>
        <v-card height="12rem">
          card
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout justify-space-between>
      <v-flex 
        v-for="i in [1, 3]" 
        :key="i" 
        v-bind="{[`order-xs${i}`]: true}"
        xs2
      >
        <v-card height="12rem">
          ddd
        </v-card>
      </v-flex>
      <v-flex order-xs2 xs4>
        <v-card height="12rem">
          t
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout justify-space-around>
      <v-flex xs9>
        <v-card height="12rem">
          card
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
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
</style>
