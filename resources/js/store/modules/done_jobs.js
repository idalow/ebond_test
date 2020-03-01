const state = {
    doneJobs: null,
    doneJobsStatus: 'Loading',
    doneJobErrors: null,
};

const getters = {
    doneJobs: state => {
        return state.doneJobs;
    },
    doneJobsStatus: state => {
        return state.doneJobsStatus;
    },
    doneJobErrors: state=> {
        return state.doneJobErrors;
    }
};

const actions = {
    fetchDoneJobs({commit, state}) {

        commit('setDoneJobsStatus', 'Loading');

        axios.get('/api/donejobs')
            .then(response => {
                commit('setDoneJobs', response.data);
                commit('setDoneJobsStatus', 'Success');
            })
            .catch(error => {
                commit('setDoneJobsStatus', 'Error');
            });
    },
    saveDoneJob({commit, state}, form) {

        commit('setDoneJobsStatus', 'Loading');

        axios.post('/api/donejobs', form)
            .then(response => {
                commit('setDoneJobsStatus', 'Sent');
            })
            .catch(errors => {
                commit('setDoneJobsStatus', 'Error');
                commit('setDoneJobErrors', errors.response.data.errors);
            });
    },
    fetchDoneJob({commit, state}, doneJobId) {
        commit('setDoneJobsStatus', 'Loading');
        axios.get('/api/donejobs/' + doneJobId )
            .then(response => {
                commit('setDoneJobs', response.data);
                commit('setDoneJobsStatus', 'Success');
            })
            .catch(error => {
                commit('setDoneJobsStatus', 'Error');
            });
    },
    updateDoneJob({commit, state}, data) {

        commit('setDoneJobsStatus', 'Loading');

        axios.patch('/api/donejobs/' + data.doneJobId, data.form)
            .then(response => {
                commit('setDoneJobsStatus', 'Sent');
            })
            .catch(errors => {
                commit('setDoneJobsStatus', 'Error');
                commit('setDoneJobErrors', errors.response.data.errors);
            });
    },
};

const mutations = {
    setDoneJobs(state, doneJobs) {
        state.doneJobs = doneJobs;
    },
    setDoneJobsStatus(state, status) {
        state.doneJobsStatus = status;
    },
    setDoneJobErrors(state, errors) {
        state.doneJobErrors = errors;
    },
};

export default {
    state, getters, actions, mutations,
}