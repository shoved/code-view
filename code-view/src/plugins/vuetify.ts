import { createVuetify } from 'vuetify';
import 'vuetify/styles'; // Import Vuetify CSS
import '@mdi/font/css/materialdesignicons.css'; // Import Material Design Icons CSS

// Vuetify theme configuration (optional)
const vuetify = createVuetify({
    theme: {
        defaultTheme: 'light',
        themes: {
            light: {
                colors: {
                    primary: '#1976D2',
                    secondary: '#424242',
                    accent: '#82B1FF',
                },
            },
        },
    },
});

export default vuetify;