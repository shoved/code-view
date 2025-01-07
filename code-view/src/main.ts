import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Import the router
import vuetify from './plugins/vuetify'; // Import Vuetify
import './styles/main.scss';
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';

// PrimeVue styles
import "primeicons/primeicons.css";                    // Icons

const app = createApp(App);

app.use(router); // Use the router
app.use(vuetify); // Use Vuetify
app.use(PrimeVue, {
  theme: {
      preset: Aura
  }
});
app.mount('#app');