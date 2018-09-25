<template>
  <div>
    <h1>Users - {{ usersLength }}</h1>
    <users-list
      v-if="showUsersTable && users.length"
      :users="users"/>
    <div v-if="!users.length">Loading ...</div>
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
import UsersList from '@/components/UsersList.vue';
import http from '@/utils/http.js';

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
    this.listUsers();
  },
  methods: {
    listUsers() {
      http
        .get(`/users`)
        .then(response => (this.users = response.data))
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
