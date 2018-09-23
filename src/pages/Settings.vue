<template>
  <div>
    <h1>Manage Authorization header</h1>
    <button
      class="button is-outlined is-info"
      type="button"
      @click="setToken">Set token</button>
    <button
      class="button is-outlined is-danger"
      type="button"
      @click="clearToken">Clear token</button>
  </div>
</template>

<script>
export default {
  name: 'Settings',
  methods: {
    setToken() {
      localStorage.setItem('token', 'JWT abc123');
    },
    clearToken() {
      localStorage.removeItem('token');
    }
  }
};
</script>
