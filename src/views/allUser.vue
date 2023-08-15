<template>
  <div class="container">
    <div class="row">
      <h2>All Users</h2>
      <button
        style="margin-left: 16px"
        class="btn btn-primary"
        @click="getData()"
      >
        Retrieve
      </button>
    </div>
    <hr />
    <div v-for="usr in users" :key="usr.id">
      <div class="row">
        <div class="col-2">{{ usr.username }}</div>
        <div class="col-4">{{ usr.firstname }} {{ usr.lastname }}</div>
        <div class="col-1">
          <router-link
            :to="{ name: 'EditUser', params: { id: usr.id } }"
            v-on:click="showValue(usr)"
            >Edit</router-link
          >
        </div>
      </div>
      <hr />
    </div>
  </div>
</template>
  
  <script>
import axios from "axios";

export default {
  data() {
    return {
      users: [],
    };
  },
  methods: {
    showValue(data) {
      console.log(data);
    },
    async getData() {
      try {
        const response = await axios.get(
          "https://see-ads-5b354-default-rtdb.europe-west1.firebasedatabase.app/users.json"
        );

        const data = await response.data;
        console.log(data);
        const tmpArray = [];
        for (let key in data) {
          let withId = data[key];
          withId.id = key;
          tmpArray.push(data[key]);
        }
        this.users = tmpArray;
      } catch (error) {
        console.error(error);
      }
    },
  },
  created() {
    this.getData(); // Fetch users data when the component is created
  },
};
</script>
  
  <style scoped>
.row {
  margin-top: 8px;
}
</style>
  