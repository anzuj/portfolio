import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        dark: true,
        themes: {
            dark: {
                primary: '#25888C',
                secondary: '#815FD6',
                accent: '#BCAAB4',
                error: '#F44336',
                info: '#FF9800',
                success: '#8BC34A',      
              }
        },
    },
});
