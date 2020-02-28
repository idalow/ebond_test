import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './views/Home';
import EmployeesList from './views/EmployeesList';

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',

    routes: [
        {
            path: '/', name: 'home', component: Home,
        },
        {
            path: '/employees', name: 'employee', component: EmployeesList,
        },
    ]
})