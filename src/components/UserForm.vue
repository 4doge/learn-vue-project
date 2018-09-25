<template>
  <div>
    <div class="field">
      <label
        for="firstName"
        class="label">First Name</label>
      <div class="control">
        <input
          id="firstName"
          v-model="user.firstName"
          class="input is-small"
          name="firstName"
          type="text">
      </div>
    </div>
    <div class="field">
      <label
        for="lastName"
        class="label">Last Name</label>
      <div class="control">
        <input
          id="lastName"
          v-model="user.lastName"
          class="input is-small"
          name="lastName"
          type="text">
      </div>
    </div>
    <div class="field">
      <label
        for="age"
        class="label">Age</label>
      <div class="control">
        <input
          id="age"
          v-model="user.age"
          class="input is-small"
          name="age"
          type="number">
      </div>
    </div>
    <div class="field">
      <label
        for="company"
        class="label">Company</label>
      <div class="control">
        <input
          id="company"
          v-model="user.company"
          class="input is-small"
          name="company"
          type="text">
      </div>
    </div>
    <div class="field">
      <label
        for="email"
        class="label">Email</label>
      <div class="control">
        <input
          id="email"
          v-model="user.email"
          class="input is-small"
          name="email"
          type="email">
      </div>
    </div>
    <div class="field">
      <label
        for="phone"
        class="label">Phone</label>
      <div class="control">
        <input
          id="phone"
          v-model="user.phone"
          class="input is-small"
          name="phone"
          type="text">
      </div>
    </div>
    <div class="field">
      <label
        for="address"
        class="label">Address</label>
      <div class="control">
        <input
          id="address"
          v-model="user.address"
          class="input is-small"
          name="address"
          type="text">
      </div>
    </div>
    <div class="field">
      <label
        for="registered"
        class="label">Registered</label>
      <div class="control">
        <input
          id="registered"
          v-model="user.registered"
          class="input is-small"
          name="registered"
          type="text">
      </div>
    </div>
    <div class="field">
      <label
        for="phone"
        class="label">Photo</label>
      <div class="control">
        <input
          id="photo"
          v-model="user.photo"
          class="input is-small"
          name="photo"
          type="text">
      </div>
    </div>
    <div class="field">
      <label
        for="isActive"
        class="label">Is active</label>
      <div class="control">
        <input
          id="isActive"
          v-model="user.isActive"
          class="checkbox is-small"
          name="isActive"
          type="checkbox"> {{ user.isActive }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserForm',
  props: {
    user: {
      type: Object,
      required: true
    }
  }
};
</script>
