<template>
  <div>
    <p>Edit user page {{ $route.params.id }}</p>
    <p>{{ user.firstName }}</p>
  </div>
</template>

<script>
import http from '@/utils/http.js';

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
      http
        .get(`/users/${this.$route.params.id}`)
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
