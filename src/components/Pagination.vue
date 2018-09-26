<template>
  <div>
    <nav
      class="pagination is-centered"
      role="navigation"
      aria-label="pagination">
      <router-link
        v-if="hasPreviousPage"
        :to="previousPageUrl"
        class="pagination-previous">Previous page</router-link>
      <router-link
        v-if="hasNextPage"
        :to="nextPageUrl"
        class="pagination-next">Next page</router-link>
      <ul class="pagination-list">
        <li
          v-for="(page, index) in pages"
          :key="index">
          <router-link
            v-if="page!=='...'"
            :to="pageUrl(page)"
            :aria-lable="'Goto page ' + page "
            :class="{ 'pagination-link': true, 'is-current': pageNumber === page }">{{ page }}</router-link>
          <span 
            v-else
            class="pagination-ellipsis">{{ page }}</span>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import pagination from '@/utils/pagination.js';

export default {
  name: 'Pagination',
  props: {
    usersPerPage: {
      type: Number,
      required: true
    },
    totalUsers: {
      type: Number,
      required: true
    },
    pageNumber: {
      type: Number,
      required: true
    },
    searchKeyword: {
      type: String,
      required: true
    }
  },
  computed: {
    pageCount() {
      return Math.floor(this.totalUsers / this.usersPerPage);
    },
    hasNextPage() {
      return this.pageNumber < this.pageCount;
    },
    hasPreviousPage() {
      return this.pageNumber > 1;
    },
    pages() {
      return pagination(this.pageNumber, this.pageCount);
    },
    previousPageNumber() {
      return this.pageNumber - 1;
    },
    nextPageNumber() {
      return this.pageNumber + 1;
    },
    nextPageUrl() {
      return `?page=${this.nextPageNumber}&limit=${this.usersPerPage}&q=${this.searchKeyword}`;
    },
    previousPageUrl() {
      return `?page=${this.previousPageNumber}&limit=${this.usersPerPage}&q=${this.searchKeyword}`;
    }
  },
  methods: {
    pageUrl(page) {
      return `?page=${page}&limit=${this.usersPerPage}&q=${this.searchKeyword}`;
    }
  }
};
</script>

<style scoped>
ul {
  list-style: none;
}
</style>
