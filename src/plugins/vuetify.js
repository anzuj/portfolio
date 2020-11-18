import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#115699',
                lightpink: '#FEFBFC',
                secondary: '#B6B4B5',
                accent: '#BCAAB4',
                error: '#F44336',
                info: '#FF9800',
                success: '#8BC34A',
                green: '#7BA287'        
              }
        },
    },
});
