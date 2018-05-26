import Vue from 'vue'
import Vuex from 'vuex'
import details from './modules/details'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        details
    },
    strict: process.env.NODE_ENV !== 'production'
})
