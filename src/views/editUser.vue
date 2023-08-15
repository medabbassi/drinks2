<template>
  <div class="container">
    <div class="row">
      <div class="col-6 offset-2">
        <h1>Edit User</h1>
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
                  v-model="currentUser.username"
                />
              </div>
              <div class="form-group">
                <label>First name</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="currentUser.firstname"
                />
              </div>
              <div class="form-group">
                <label>Last name</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="currentUser.lastname"
                />
              </div>
            </div>
          </div>
        </div>
        <button
          class="btn btn-primary float-left"
          style="margin-left: 12px"
          @click="putUser()"
        >
          Save
        </button>
        <button
          class="btn btn-danger float-right"
          style="margin-right: 12px"
          @click="deleteUser()"
        >
          Delete
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "EditUser",
  props: {
    id: String,
  },
  data() {
    return {
      currentUser: {
        username: "",
        firstname: "",
        lastname: "",
      },
    };
  },
  methods: {
    async fetchUser() {
      try {
        const response = await axios.get(
          `https://see-ads-5b354-default-rtdb.europe-west1.firebasedatabase.app/users/${this.id}.json`
        );

        if (response.data) {
          this.currentUser = response.data;
        } else {
          console.error("User not found");
        }
      } catch (error) {
        console.error(error);
      }
    },
    async putUser() {
      try {
        await axios.put(
          `https://see-ads-5b354-default-rtdb.europe-west1.firebasedatabase.app/users/${this.id}.json`,
          this.currentUser
        );
        alert("The user is updated.", "Operation Succeeded", "success");
      } catch (error) {
        console.log(error);
      }
    },
    deleteUser() {
      confirm("Are you sure you want to delete the user?").then(() => {
        axios
          .delete(
            `https://see-ads-5b354-default-rtdb.europe-west1.firebasedatabase.app/users/${this.id}.json`
          )
          .then(
            () => {
              this.$router.push("AllUsers");
            },
            (error) => {
              console.log(error);
            }
          );
      });
    },
  },
  created() {
    this.fetchUser();
  },
};
</script>

<style scoped>
.row {
  margin-top: 8px;
}
</style>
