<template>
  <div>
    <p>Edit user page {{ $route.params.id }}</p>
    <p>{{ user.firstName }}</p>
  </div>
</template>

<script>
import axios from 'axios';
import { apiHost } from '@/config.js';

export default {
  name: 'EditUser',
  data: () => ({
    user: {}
  }),
  mounted() {
    this.getUser();
  },
  methods: {
    getUser() {
      axios
        .get(`${apiHost}/users/${this.$route.params.id}`)
        .then(response => {
          this.user = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>
