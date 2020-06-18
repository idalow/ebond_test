import Vue from 'vue';
import Vuex from 'vuex';
import Employee from './modules/employees';
import Partner from './modules/partners';
import Task from './modules/tasks';
import DoneJob from './modules/done_jobs';
import Title from './modules/title';
import User from './modules/user';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        Employee,
        Partner,
        Task,
        DoneJob,
        Title,
        User,
    }
});