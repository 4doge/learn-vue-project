<template>
  <div class="columns">
    <div class="column is-one-third">
      <h1 class="title is-1">Add user</h1>
      <div v-if="user">
        <user-form :user="user"/>
        <button
          v-if="user"
          class="button is-outlined is-info"
          type="button"
          @click="addUser">Add</button>
      </div>
      <div v-else>
        <p>Loading ...</p>
      </div>
    </div>
</div></template>

<script>
import http from '@/utils/http.js';
import UserForm from '@/components/UserForm.vue';

export default {
  name: 'AddUser',
  components: {
    'user-form': UserForm
  },
  data: () => ({
    user: {}
  }),
  methods: {
    addUser() {
      http
        .post('/users', this.user)
        .then(() => {
          this.$router.push({
            name: 'users'
          });
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>
