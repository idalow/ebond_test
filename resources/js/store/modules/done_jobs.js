const state = {
    doneJobs: null,
    doneJobsForPartners: null,
    doneJobsStatus: 'Loading',
    DoneJobsForPartnersStatus: 'Loading',
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
    },
    doneJobsForPartners: state=> {
        return state.doneJobsForPartners;
    },
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
    fetchPartnerDoneJobs({commit, state}, partnerId) {
        commit('setDoneJobsForPartnersStatus', 'Loading');
        axios.get('/api/getdonejobsbypartners/' + partnerId )
            .then(response => {
                commit('setDoneJobsForPartners', response.data);
                commit('setDoneJobsForPartnersStatus', 'Success');
            })
            .catch(error => {
                commit('setDoneJobsForPartnersStatus', 'Error');
            });
    },
};

const mutations = {
    setDoneJobs(state, doneJobs) {
        state.doneJobs = doneJobs;
    },
    setDoneJobsForPartners(state, doneJobs) {
        state.doneJobsForPartners = doneJobs;
    },
    setDoneJobsStatus(state, status) {
        state.doneJobsStatus = status;
    },
    setDoneJobsForPartnersStatus(state, status) {
        state.doneJobsForPartnersStatus = status;
    },
    setDoneJobErrors(state, errors) {
        state.doneJobErrors = errors;
    },
};

export default {
    state, getters, actions, mutations,
}