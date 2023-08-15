import { createApp } from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import router from "./routes"; // Make sure this is the correct path

const app = createApp(App);
app.use(router);
app.mount("#app");
