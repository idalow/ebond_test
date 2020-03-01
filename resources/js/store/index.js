import Vue from 'vue';
import Vuex from 'vuex';
import Employee from './modules/employees';
import Partner from './modules/partners';
import Task from './modules/tasks';
import DoneJob from './modules/done_jobs';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        Employee,
        Partner,
        Task,
        DoneJob,
    }
});