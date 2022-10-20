import { createStore } from "vuex"
import axios from "axios";
import { ref } from "vue";
const store = createStore({
    state: {
        songs: {
            data: {}
        }
    },
    getters: {},
    actions: {
        result({ commit }, se) {

            commit('music', se)



        }
    },
    mutations: {
        music: (state, user) => {
            state.songs.data = user
            console.log(user);
        }
    },
    modules: {}
})

export default store