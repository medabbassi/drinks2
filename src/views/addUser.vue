<template>
  <div class="container">
    <div class="row">
      <div class="col-6 offset-2">
        <h1>Add User</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-6 offset-2">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="form-group">
                <label>Username</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="user.username"
                />
              </div>
              <div class="form-group">
                <label>First name</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="user.firstname"
                />
              </div>
              <div class="form-group">
                <label>Last name</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="user.lastname"
                />
              </div>
            </div>
          </div>
        </div>
        <button
          class="btn btn-primary float-left"
          style="marginleft: 12px"
          @click="postUser()"
        >
          Add
        </button>
      </div>
    </div>
  </div>
</template>
            <script>
import axios from "axios"; // Import Axios

export default {
  name: "AddUser",
  methods: {
    async postUser() {
      axios
        .post(
          "https://see-ads-5b354-default-rtdb.europe-west1.firebasedatabase.app/users.json",
          this.user
        )
        .then(
          () => {
            this.user.username = "";
            this.user.firstname = "";
            this.user.lastname = "";
            alert("A new user is added.", "Operation Succeeded", "success");
          },
          (error) => {
            console.log(error);
          }
        );
    },
  },
  data() {
    return {
      user: {
        username: "",
        firstname: "",
        lastname: "",
      },
    };
  },
};
</script>
<style scoped>
.row {
  margin-top: 8px;
}
</style>