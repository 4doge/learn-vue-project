<template>
  <div id="app">
    <nav
      class="navbar is-dark"
      role="navigation"
      aria-label="main navigation">
      <div class="navbar-brand">
        <router-link 
          to="/" 
          class="navbar-item"
          exact-active-class="">
          <img src="https://vuejs.org/images/logo.png">
        </router-link>
      </div>
      <div class="navbar-menu">
        <div class="navbar-start">
          <router-link
            to="/"
            class="navbar-item">Home</router-link>
          <router-link
            to="/users"
            class="navbar-item">Users</router-link>
          <router-link
            to="/users/new"
            class="navbar-item">Add new user</router-link>
          <router-link
            to="/about"
            class="navbar-item">About</router-link>
          <router-link
            to="/settings"
            class="navbar-item">Settings</router-link>
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
