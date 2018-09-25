<template>
  <div>
    <h1 class="title is-1">Users - {{ usersLength }}</h1>
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
    <hr>
    <pagination
      :page-number="pageNumber"
      :users-per-page="usersPerPage"
      :total-users="totalUsers"/>

  </div>
</template>

<script>
import UsersList from '@/components/UsersList.vue';
import Pagination from '@/components/Pagination.vue';
import http from '@/utils/http.js';

export default {
  name: 'UsersPage',
  components: {
    'users-list': UsersList,
    pagination: Pagination
  },
  data: () => ({
    showUsersTable: true,
    users: [],
    usersPerPage: 5,
    totalUsers: 0,
    defaultPageNumber: 1
  }),
  computed: {
    usersLength() {
      return this.users.length;
    },
    toggleTableButtonText() {
      return this.showUsersTable ? 'Hide' : 'Show';
    },
    pageNumber() {
      return parseInt(this.$route.query._page) || this.defaultPageNumber;
    }
  },
  watch: {
    users() {
      console.log('Users loaded');
    },
    pageNumber() {
      this.listUsers();
    }
  },
  mounted() {
    this.listUsers();
  },
  methods: {
    listUsers() {
      http
        .get(`/users/?_page=${this.pageNumber}&_limit=${this.usersPerPage}`)
        .then(response => {
          this.totalUsers = parseInt(response.headers['x-total-count']);
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
