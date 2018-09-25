<template>
  <div class="columns">
    <div class="column is-one-third">
      <h1>Edit user</h1>
      <div v-if="user">
        <user-form :user="user"/>
        <button
          v-if="user"
          class="button is-outlined is-info"
          type="button"
          @click="updateUser">Update</button>
      </div>
      <div v-else>
        <p>Loading ...</p>
      </div>
    </div>
  </div>
</template>

<script>
import http from '@/utils/http.js';
import router from '@/router.js';
import UserForm from '@/components/UserForm.vue';

export default {
  name: 'EditUser',
  components: {
    'user-form': UserForm
  },
  data: () => ({
    user: null,
    errorMessage: ''
  }),
  computed: {
    id() {
      return this.$route.params.id;
    },
    url() {
      return `/users/${this.id}`;
    }
  },
  mounted() {
    this.getUser();
  },
  methods: {
    getUser() {
      http
        .get(this.url)
        .then(response => {
          this.user = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    },
    updateUser() {
      http
        .put(this.url, this.user)
        .then(() => {
          router.push({
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
