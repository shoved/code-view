import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Import the router
import vuetify from './plugins/vuetify'; // Import Vuetify
import './assets/styles/main.scss';

const app = createApp(App);

app.use(router); // Use the router
app.use(vuetify); // Use Vuetify
app.mount('#app');