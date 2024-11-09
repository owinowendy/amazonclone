import { createApp } from 'vue'
import App from './App.vue'
import VueProgressBar from "@aacassandra/vue3-progressbar";

createApp(App).mount('#app')

const options = {
    color: "#bffaf3",
    failedColor: "#874b4b",
    thickness: "5px",
    transition: {
      speed: "0.2s",
      opacity: "0.6s",
      termination: 300,
    },
    autoRevert: true,
    location: "left",
    inverse: false,
  };
  
  createApp(App)
    .use(VueProgressBar, options)
    .use(router)
    .mount("#app");