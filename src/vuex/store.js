import Vuex from 'vuex';
import Vue from 'vue'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    questions: []
  },
  mutations: {
    addQuestion (state, payload) {
      return state.questions.push(payload.question);
    }
  },
  actions: {
    addQuestion (context, payload) {
      context.commit('addQuestion', payload)
    }
  }
})

export default store;