import Vue from 'vue';
import Router from 'vue-router';
import Home from './pages/Home.vue';
import About from './pages/About.vue';
import Users from './pages/Users.vue';
import EditUser from './components/EditUser.vue';
import AddUser from './components/AddUser.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/users',
      name: 'users',
      component: Users
    },
    {
      path: '/users/new',
      name: 'addUser',
      component: AddUser
    },
    {
      path: '/users/:id',
      name: 'editUser',
      component: EditUser
    }
  ]
});
