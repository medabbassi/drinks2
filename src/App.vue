<template>
  <div id="app">
    <nav id="nav">
      <p class="logo-place">Vue.js Remote Server (Enhanced)</p>
      <ul class="nav-links">
        <li class="links">
          <router-link to="/">Home</router-link>
        </li>
        <li class="links">
          <router-link to="/AddUser">Add User</router-link>
        </li>
        <li class="links">
          <router-link to="/AllUsers">All User</router-link>
        </li>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>
  <script>
export default {
  name: "App",
  components: {},
};
</script>
<style>
#nav {
  display: flex;
  margin-bottom: 24px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  margin-right: 12px;
}
#nav a.router-link-active {
  color: #ab26ab;
}
.nav-links {
  padding-right: 20px;
  list-style: none;
  display: flex;
  margin: 21px 0 0 0;
}
.links-hover {
  text-decoration: underline;
}
.logo-place {
  font-size: 20px;
  color: purple;
  font-weight: bold;
  margin: 16px 0 0 16px;
}
</style>