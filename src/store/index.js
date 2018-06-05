import Vue from 'vue'
import Vuex from 'vuex'
import details from './modules/details'
import teacher from './modules/teacher'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        details,
        teacher
    },
    strict: process.env.NODE_ENV !== 'production'
})
