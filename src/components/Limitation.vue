<template>
  <div class="select">
    <select @change="handleChange($event.target.value)">
      <option
        v-for="(option, index) in options"
        :key="index"
        :selected="option == limit"
        :value="option">{{ option }}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'Limitation',
  props: {
    limit: {
      type: Number,
      required: true
    }
  },
  data: () => ({
    options: [5, 10, 20]
  }),
  methods: {
    handleChange(value) {
      this.$router.push({
        query: {
          page: 1,
          limit: value
        }
      });
    }
  }
};
</script>
