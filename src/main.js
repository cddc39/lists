import { createApp } from "vue";
import { createPinia } from "pinia";
import { Quasar } from "quasar";

import "@quasar/extras/roboto-font/roboto-font.css";
import "@quasar/extras/material-icons/material-icons.css";
import "quasar/src/css/index.sass";

import App from "./App.vue";
import './registerServiceWorker'

createApp(App)
  .use(createPinia())
  .use(Quasar, {
    plugins: {}, // import Quasar plugins and add here
  })
  .mount("#app");
