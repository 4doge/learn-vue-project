<template>
  <table class="table is-bordered is-striped is-fullwidth is-hoverable">
    <thead>
      <tr>
        <th>Photo</th>
        <th>First name</th>
        <th>Last name</th>
        <th>Company</th>
        <th>Age</th>
        <th>Email</th>
        <th>Phone</th>
        <th/>
        <th/>
        <th/>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="user of users"
        :key="user.id">
        <td>
          <div class="image is-48x48">
            <img
              :src="user.photo || 'https://i.imgur.com/aPwd0ES.jpg'"
              class="is-rounded"
              alt="">
          </div>
        </td>
        <td>{{ user.firstName | capitalize }}</td>
        <td>{{ user.lastName | capitalize }}</td>
        <td>{{ user.company }}</td>
        <td>{{ user.age }}</td>
        <td>{{ user.email }}</td>
        <td>{{ user.phone }}</td>
        <td>
          <button
            v-copy="getCopyData(user.firstName, user.lastName)"
            v-copy:callback="copied"
            class="button is-outlined is-info"
            type="button">Copy</button>
        </td>
        <td>
          <router-link
            :to="{ name: 'editUser', params: { id: user.id }}"
            class="button is-outlined is-info">Edit</router-link>
        </td>
        <td>
          <button
            class="button is-outlined is-danger"
            type="button"
            @click="deleteUser(user.id)">Delete</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import http from '@/utils/http.js';
import capitalize from '@/utils/capitalize.js';

export default {
  name: 'UsersList',
  filters: {
    capitalize: value => capitalize(value)
  },
  props: {
    users: {
      type: Array,
      required: true
    }
  },
  methods: {
    copied(value) {
      alert(value + ' copied!');
    },
    getCopyData(first_name, last_name) {
      return `${capitalize(first_name)} ${capitalize(last_name)}`;
    },
    deleteUser(id) {
      http
        .delete(`/users/${id}`)
        .then(() => {
          this.users.splice(this.users.findIndex(user => user.id === id), 1);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>
