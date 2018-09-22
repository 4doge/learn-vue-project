<template>
  <div id="app">
    <nav
      class="navbar is-dark"
      role="navigation"
      aria-label="main navigation">
      <div class="navbar-brand">
        <a
          class="navbar-item"
          href="/">
          <img src="https://vuejs.org/images/logo.png">
        </a>
      </div>
      <div class="navbar-menu">
        <div class="navbar-start">
          <router-link
            to="/"
            class="navbar-item"
            exact-active-class="is-active">Home</router-link>
          <router-link
            to="/users"
            class="navbar-item"
            exact-active-class="is-active">Users</router-link>
          <router-link
            to="/users/new"
            class="navbar-item"
            exact-active-class="is-active">Add new user</router-link>
          <router-link
            to="/about"
            class="navbar-item"
            exact-active-class="is-active">About</router-link>
        </div>
      </div>
    </nav>
    <div class="container">
      <div class="content">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<style>
@import '~nprogress/nprogress.css';
</style>
