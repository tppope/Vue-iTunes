import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import mitt, { Emitter } from "mitt";

declare global {
  interface Window {
    eventBus: Emitter<any>;
  }
}

window.eventBus = mitt();

createApp(App).use(router).mount("#app");
