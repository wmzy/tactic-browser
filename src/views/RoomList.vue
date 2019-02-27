<template>
  <div>
    <v-btn @click="handleCreateClick">新建</v-btn>
    <v-list two-line>
      <template v-for="room in rooms">
        <v-list-tile :key="room.id">
          <v-list-tile-content>
            <v-list-tile-title>{{ room.id }} - {{ room.name }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </template>
    </v-list>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      rooms: []
    };
  },
  created() {
    axios.get('/rooms').then(res => (this.rooms = res.data));
  },
  methods: {
    handleCreateClick() {
      axios
        .post('/rooms', {name: `test${this.rooms.length}`})
        .then(res => this.$router.push({path: `/rooms/${res.data.id}`}));
    }
  }
};
</script>
