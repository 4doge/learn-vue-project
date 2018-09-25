<template>
  <div class="columns">
    <div class="column is-one-third">
      <div>
        <h1>Add user</h1>
        <form
          action="#"
          @submit.prevent="addUser(user)">
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
              for="address"
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
                v-model="user.registered"
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
          <div class="field">
            <label
              for="isActive"
              class="label">Is active</label>
            <div class="control">
              <input
                id="isActive"
                v-model="user.isActive"
                class="checkbox is-small"
                name="isActive"
                type="checkbox">
            </div>
          </div>
          {{ user.isActive }}
          <button
            class="button is-outlined is-info"
            type="submit">Add</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import http from '@/utils/http.js';
import router from '@/router.js';

export default {
  name: 'AddUser',
  data: () => ({
    user: {}
  }),
  methods: {
    addUser() {
      http
        .post('/users', this.user)
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
