const state = {
    partners: null,
    partnersStatus: 'Loading',
    partnerErrors: null,
};

const getters = {
    partners: state => {
        return state.partners;
    },
    partnersStatus: state => {
        return state.partnersStatus;
    },
    partnerErrors: state=> {
        return state.partnerErrors;
    }
};

const actions = {
    fetchPartners({commit, state}) {

        commit('setpartnersStatus', 'Loading');

        axios.get('/api/partners')
            .then(response => {
                commit('setpartners', response.data);
                commit('setpartnersStatus', 'Success');
            })
            .catch(error => {
                commit('setpartnersStatus', 'Error');
            });
    },
    savePartner({commit, state}, form) {

        commit('setpartnersStatus', 'Loading');

        axios.post('/api/partners', form)
            .then(response => {
                commit('setpartnersStatus', 'Sent');
            })
            .catch(errors => {
                commit('setpartnersStatus', 'Error');
                commit('setpartnerErrors', errors.response.data.errors);
            });
    },
    fetchPartner({commit, state}, partnerId) {
        commit('setpartnersStatus', 'Loading');
        axios.get('/api/partners/' + partnerId )
            .then(response => {
                commit('setpartners', response.data);
                commit('setpartnersStatus', 'Success');
            })
            .catch(error => {
                commit('setpartnersStatus', 'Error');
            });
    },
    updatePartner({commit, state}, data) {

        commit('setpartnersStatus', 'Loading');

        axios.patch('/api/partners/' + data.partnerId, data.form)
            .then(response => {
                commit('setpartnersStatus', 'Sent');
            })
            .catch(errors => {
                commit('setpartnersStatus', 'Error');
                commit('setpartnerErrors', errors.response.data.errors);
            });
    },
};

const mutations = {
    setpartners(state, partners) {
        state.partners = partners;
    },
    setpartnersStatus(state, status) {
        state.partnersStatus = status;
    },
    setpartnerErrors(state, errors) {
        state.partnerErrors = errors;
    },
};

export default {
    state, getters, actions, mutations,
}