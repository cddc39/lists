import "@quasar/extras/material-icons/material-icons.css"
import "@quasar/extras/roboto-font/roboto-font.css"
import "quasar/src/css/index.sass"
import { createApp } from "vue"
import { createPinia, PiniaVuePlugin } from "pinia"
import { Quasar } from "quasar"
import App from "./App.vue"
import piniaPersist from "pinia-plugin-persist"
import router from "./router"

createApp(App)
  .use(PiniaVuePlugin)
  .use(createPinia().use(piniaPersist))
  .use(Quasar, {
    plugins: {},
  })
  .use(router)
  .mount("#app")
