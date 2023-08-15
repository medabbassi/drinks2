<template>
  <div class="container">
    <div class="row">
      <div class="col-6 offset-2">
        <h1>Welcome in our website!</h1>
      </div>
    </div>
    <div class="row" style="margin-top: 30px">
      <div class="card" style="width: 18rem">
        <div class="card-body">
          <h5 class="card-title">ِ Add User</h5>
          <p class="card-text">
            Add a new user to the Firebase experimental website.
          </p>
          <router-link class="btn btn-primary" to="/AddUser"
            >Add a user</router-link
          >
        </div>
      </div>
      <div class="card" style="width: 18rem; margin-left: 18px">
        <div class="card-body">
          <h5 class="card-title">All User</h5>
          <p class="card-text">
            Display all users info from the Firebase experimental website.
          </p>
          <router-link class="btn btn-primary" to="/AllUsers"
            >Get all users</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Home",
};
</script>