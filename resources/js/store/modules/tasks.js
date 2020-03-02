const state = {
    tasks: null,
    tasksStatus: 'Loading',
    tasksForPartners: null,
    tasksForPartnersStatus: 'Loading',
    taskErrors: null,
};

const getters = {
    tasks: state => {
        return state.tasks;
    },
    tasksForPartners: state => {
        return state.tasksForPartners;
    },
    tasksStatus: state => {
        return state.tasksStatus;
    },
    tasksForPartnersStatus: state => {
        return state.tasksForPartnersStatus;
    },
    taskErrors: state=> {
        return state.taskErrors;
    }
};

const actions = {
    fetchTasks({commit, state}) {

        commit('setTasksStatus', 'Loading');

        axios.get('/api/tasks')
            .then(response => {
                commit('setTasks', response.data);
                commit('setTasksStatus', 'Success');
            })
            .catch(error => {
                commit('setTasksStatus', 'Error');
            });
    },
    saveTask({commit, state}, form) {

        commit('setTasksStatus', 'Loading');

        axios.post('/api/tasks', form)
            .then(response => {
                commit('setTasksStatus', 'Sent');
            })
            .catch(errors => {
                commit('setTasksStatus', 'Error');
                commit('setTaskErrors', errors.response.data.errors);
            });
    },
    fetchTask({commit, state}, taskId) {
        commit('setTasksStatus', 'Loading');
        axios.get('/api/tasks/' + taskId )
            .then(response => {
                commit('setTasks', response.data);
                commit('setTasksStatus', 'Success');
            })
            .catch(error => {
                commit('setTasksStatus', 'Error');
            });
    },
    updateTask({commit, state}, data) {

        commit('setTasksStatus', 'Loading');

        axios.patch('/api/tasks/' + data.taskId, data.form)
            .then(response => {
                commit('setTasksStatus', 'Sent');
            })
            .catch(errors => {
                commit('setTasksStatus', 'Error');
                commit('setTaskErrors', errors.response.data.errors);
            });
    },
    fetchPartnerTasks({commit, state}, partnerId) {
        commit('setTasksForPartnersStatus', 'Loading');
        axios.get('/api/gettasksbypartners/' + partnerId )
            .then(response => {
                commit('setTasksForPartners', response.data);
                commit('setTasksForPartnersStatus', 'Success');
            })
            .catch(error => {
                commit('setTasksForPartnersStatus', 'Error');
            });
    },
};

const mutations = {
    setTasks(state, tasks) {
        state.tasks = tasks;
    },
    setTasksForPartners(state, tasks) {
        state.tasksForPartners = tasks;
    },
    setTasksForPartnersStatus(state, status) {
        state.TasksForPartnersStatus = status;
    },
    setTasksStatus(state, status) {
        state.tasksStatus = status;
    },
    setTaskErrors(state, errors) {
        state.taskErrors = errors;
    },
};

export default {
    state, getters, actions, mutations,
}