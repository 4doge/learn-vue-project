<template>
  <div class="columns">
    <div class="column is-one-third">
      <div>
        <div v-if="errorMessage">
          <h1>{{ errorMessage }}</h1>
        </div>
        <div
          v-else
          class="user">
          <h1>Edit user</h1>
          <form
            action="#">
            <!--@submit.prevent="updateUser(user)">-->
            <div class="field">
              <label
                for="firstName"
                class="label">First Name</label>
              <div class="control">
                <input
                  id="firstName"
                  v-model="user.firstName"
                  class="input is-small"
                  name="firstName"
                  type="text">
              </div>
            </div>
            <div class="field">
              <label
                for="lastName"
                class="label">Last Name</label>
              <div class="control">
                <input
                  id="lastName"
                  v-model="user.lastName"
                  class="input is-small"
                  name="lastName"
                  type="text">
              </div>
            </div>
            <div class="field">
              <label
                for="age"
                class="label">Age</label>
              <div class="control">
                <input
                  id="age"
                  v-model="user.age"
                  class="input is-small"
                  name="age"
                  type="number">
              </div>
            </div>
            <div class="field">
              <label
                for="company"
                class="label">Company</label>
              <div class="control">
                <input
                  id="company"
                  v-model="user.company"
                  class="input is-small"
                  name="company"
                  type="text">
              </div>
            </div>
            <div class="field">
              <label
                for="email"
                class="label">Email</label>
              <div class="control">
                <input
                  id="email"
                  v-model="user.email"
                  class="input is-small"
                  name="email"
                  type="email">
              </div>
            </div>
            <div class="field">
              <label
                for="phone"
                class="label">Phone</label>
              <div class="control">
                <input
                  id="phone"
                  v-model="user.phone"
                  class="input is-small"
                  name="phone"
                  type="text">
              </div>
            </div>
            <div class="field">
              <label
                for="phone"
                class="label">Address</label>
              <div class="control">
                <input
                  id="address"
                  v-model="user.address"
                  class="input is-small"
                  name="address"
                  type="text">
              </div>
            </div>
            <div class="field">
              <label
                for="phone"
                class="label">Registered</label>
              <div class="control">
                <input
                  id="registered"
                  v-model="user.phone"
                  class="input is-small"
                  name="registered"
                  type="text">
              </div>
            </div>
            <div class="field">
              <label
                for="phone"
                class="label">Photo</label>
              <div class="control">
                <input
                  id="photo"
                  v-model="user.photo"
                  class="input is-small"
                  name="photo"
                  type="text">
              </div>
            </div>
            <button
              class="button is-outlined is-info"
              type="submit">Update</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import http from '@/utils/http.js';

export default {
  name: 'EditUser',
  data: () => ({
    user: {},
    errorMessage: ''
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
          this.errorMessage = error.response.statusText;
        });
    }
  }
};
</script>
