<template>
  <div class="is-half">
    <input
      :value="searchKeyword"
      class="input"
      type="text"
      placeholder="Darcy"
      @input="handleChange($event.target.value)">
  </div>
</template>

<script>
export default {
  name: 'Search',
  props: {
    searchKeyword: {
      type: String,
      required: true
    },
    usersPerPage: {
      type: Number,
      required: true
    }
  },
  methods: {
    handleChange(value) {
      this.$router.push({
        query: {
          page: 1,
          limit: this.usersPerPage,
          q: value
        }
      });
    }
  }
};
</script>
