import Vue from 'vue';
import Vuex from 'vuex';
import Employee from './modules/employees';
import Partner from './modules/partners';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        Employee,
        Partner,
    }
});