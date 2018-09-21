<template>
  <div>
    <h1>Users - {{ usersLength }}</h1>
    <users-list
      v-if="showUsersTable"
      :users="users"></users-list>
    <button
      v-tooltip.right-start="{ content: 'Table showing option', offset: 10 }"
      class="button is-outlined is-info"
      type="button"
      @click="showHideUsersTable">
      {{ toggleTableButtonText }}
    </button>
  </div>
</template>

<script>
import axios from 'axios';
import UsersList from '@/components/UsersList.vue';
import { apiHost } from '@/config.js';

export default {
  name: 'UsersPage',
  components: {
    'users-list': UsersList
  },
  data: () => ({
    showUsersTable: true,
    users: []
  }),
  computed: {
    usersLength() {
      return this.users.length;
    },
    toggleTableButtonText() {
      return this.showUsersTable ? 'Hide' : 'Show';
    }
  },
  watch: {
    users() {
      console.log('Users loaded');
    }
  },
  mounted() {
    this.loadUsers();
  },
  methods: {
    loadUsers() {
      axios
        .get(`${apiHost}/users`)
        .then(response => {
          this.users = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    },
    showHideUsersTable() {
      this.showUsersTable = !this.showUsersTable;
    }
  }
};
</script>
