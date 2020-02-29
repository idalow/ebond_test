import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './views/Home';
import EmployeesList from './views/employee/EmployeesList';
import NewEmployee from './views/employee/NewEmployee';
import ShowEmployee from './views/employee/ShowEmployee';
import EditEmployee from './views/employee/EditEmployee';
import PartnersList from './views/partner/PartnersList';
import NewPartner from './views/partner/NewPartner';
import ShowPartner from './views/partner/ShowPartner';
import EditPartner from './views/partner/EditPartner';

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',

    routes: [
        {   path: '/', name: 'home', component: Home,   },
        {   path: '/employees', name: 'employee', component: EmployeesList, },
        {   path: '/employee/new', name: 'newemployee', component: NewEmployee, },
        {   path: '/employee/:id', name: 'showemployee', component: ShowEmployee,  },
        {   path: '/employee/:id/edit', name: 'editemployee', component: EditEmployee, },
        {   path: '/partners', name: 'partner', component: PartnersList, },
        {   path: '/partner/new', name: 'newpartner', component: NewPartner, },
        {   path: '/partner/:id', name: 'showpartner', component: ShowPartner,  },
        {   path: '/partner/:id/edit', name: 'editpartner', component: EditPartner, },
    ]
})