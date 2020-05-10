import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import axiosInstall from "./axios";
import store from './store';

createApp(App as any)
  .use(router)
  .use(axiosInstall)
  .use(store)
  .mount("#app");
