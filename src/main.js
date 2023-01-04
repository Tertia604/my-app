import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router/index.js";
import store from "./store/index.js";
import * as filters from "./filters";

const app = createApp(App);
app.use(router).use(store).mount("#app");

app.config.globalProperties.$filters = filters;
