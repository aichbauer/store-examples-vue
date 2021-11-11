import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
    message: 'Hello World!',
    todos: [
      { id: 1, text: 'whatever', done: false },
      { id: 2, text: 'whatever', done: false },
      { id: 3, text: 'whatever', done: false },
      { id: 4, text: 'whatever', done: false },
      { id: 5, text: 'whatever', done: false },
      { id: 6, text: 'whatever', done: false },
      { id: 7, text: 'whatever 2', done: true },
      { id: 8, text: 'whatever 2', done: true },
      { id: 9, text: 'whatever 2', done: true },
    ],
  },
  mutations: {
    increment(state) {
      state.count += 1;
    },
    setMessage(state, payload) {
      state.message = payload.message;
    },
    inverseMessage(state) {
      state.message = state.message.split('').reverse().join('');
    },
  },
  getters: {
    getDoneTodos(state) {
      return state.todos.filter((todo) => todo.done);
    },
  },
  actions: {
    incrementAsync({ commit }) {
      setTimeout(() => {
        commit('increment');
      }, 1000);
    },
  },
  modules: {},
});
