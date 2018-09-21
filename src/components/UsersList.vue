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
        <th></th>
        <th></th>
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
          <!--<a v-bind:href="'?user.id=' + user.id">-->
          <!--</a>-->
          <!--<edit-user :user="user"/>-->
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { capitalize } from '@/utils.js';

export default {
  name: 'UsersList',
  filters: {
    capitalize(value) {
      return capitalize(value);
    }
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
    }
  }
};
</script>
