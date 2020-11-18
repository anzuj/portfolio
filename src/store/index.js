import Vue from "vue";
import Vuex from "vuex";
// import module1 from "./modules/module1";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {},
    strict: true,
    state: {
      cat: "Leeroy"
    },
    getters: {
        getCat: state => {
            return state.cat;
        }
    },
    mutations: {
       UPDATE_CAT(state, newCat) {
            state.cat = newCat;
        }
    },
    actions: {
        updateCat(context, newCat) {
            context.commit("UPDATE_CAT", newCat)
        },
    }
});
