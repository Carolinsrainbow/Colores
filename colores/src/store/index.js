import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    colores: {},
  },
  mutations: {
    GET_COLORES(state, data) {
      state.colores = data;
    },
  },
  actions: {
    getColores({ commit }) {
      axios.get("http://localhost:8080/colores.json").then((res) => {
        console.log(res.data);

        commit("GET_COLORES", res.data);
      });
    },
  },
  modules: {},
});
