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
import StatisticsTask from './views/task/StatisticsTask';
import DoneJobList from './views/done_job/DoneJobList';
import StatisticsEmployee from './views/employee/StatisticsEmployee';
import StatisticsDoneJob from './views/done_job/StatisticsDoneJob';

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',

    routes: [
        {   path: '/', name: 'home', component: Home,   },
        {   path: '/employee', name: 'employee', component: EmployeesList, meta: { title: 'Employee List' } },
        {   path: '/employee/new', name: 'newemployee', component: NewEmployee, meta: { title: 'New Employee' } },
        {   path: '/employee/:id', name: 'showemployee', component: ShowEmployee, meta: { title: 'Show Employee' }  },
        {   path: '/employee/:id/edit', name: 'editemployee', component: EditEmployee, meta: { title: 'Edit Employee' } },
        {   path: '/employee/:id/statistics', name: 'statisticsemployee', component: StatisticsEmployee, meta: { title: 'Statistics Employee' } },
        {   path: '/partner', name: 'partner', component: PartnersList, meta: { title: 'Partners List' } },
        {   path: '/partner/new', name: 'newpartner', component: NewPartner, meta: { title: 'New Partner' } },
        {   path: '/partner/:id', name: 'showpartner', component: ShowPartner, meta: { title: 'Show Partner' }  },
        {   path: '/partner/:id/edit', name: 'editpartner', component: EditPartner, meta: { title: 'Edit Partner' } },
        {   path: '/task', name: 'task', component: TaskList, meta: { title: 'Task List' } },
        {   path: '/task/new', name: 'newtask', component: NewTask, meta: { title: 'New Task' } },
        {   path: '/task/statistics', name: 'statisticstask', component: StatisticsTask, meta: { title: 'Statistics Task' } },
        {   path: '/task/:id/edit', name: 'edittask', component: EditTask, meta: { title: 'Edit Task' } },
        {   path: '/task/:id/done', name: 'donetask', component: DoneTask, meta: { title: 'Done Task' } },
        {   path: '/done_job', name: 'donejob', component: DoneJobList, meta: { title: 'Done Job List' } },
        {   path: '/done_job/statistics', name: 'statisticsdonejob', component: StatisticsDoneJob, meta: { title: 'Statistics Done Job' } },
    ]
})