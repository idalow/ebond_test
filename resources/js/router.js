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
import TaskList from './views/task/TaskList';
import NewTask from './views/task/NewTask';
import DoneTask from './views/task/DoneTask';
import EditTask from './views/task/EditTask';

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',

    routes: [
        {   path: '/', name: 'home', component: Home,   },
        {   path: '/employee', name: 'employee', component: EmployeesList, },
        {   path: '/employee/new', name: 'newemployee', component: NewEmployee, },
        {   path: '/employee/:id', name: 'showemployee', component: ShowEmployee,  },
        {   path: '/employee/:id/edit', name: 'editemployee', component: EditEmployee, },
        {   path: '/partner', name: 'partner', component: PartnersList, },
        {   path: '/partner/new', name: 'newpartner', component: NewPartner, },
        {   path: '/partner/:id', name: 'showpartner', component: ShowPartner,  },
        {   path: '/partner/:id/edit', name: 'editpartner', component: EditPartner, },
        {   path: '/task', name: 'task', component: TaskList, },
        {   path: '/task/new', name: 'newtask', component: NewTask, },
        {   path: '/task/:id/edit', name: 'edittask', component: EditTask, },
        {   path: '/task/:id/done', name: 'donetask', component: DoneTask, },
    ]
})