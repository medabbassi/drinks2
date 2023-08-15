import { createRouter, createWebHistory } from "vue-router";
import home from "./views/HomeUser.vue";
import addUser from "./views/addUser.vue";
import getAllUser from "./views/allUser.vue";
import editUser from "./views/editUser.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: home,
  },
  {
    path: "/AddUser",
    name: "AddUser",
    component: addUser,
  },
  {
    path: "/EditUser/:id",
    name: "EditUser",
    component: editUser,
    props: true,
  },
  {
    path: "/AllUsers",
    name: "allUser",
    component: getAllUser,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
