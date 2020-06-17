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

        const formData = new FormData();
        formData.append('avatar', form.avatar);
        formData.append('name', form.name);
        formData.append('address', form.address);
        formData.append('email', form.email);
        formData.append('phone', form.phone);

        axios.post('/api/partners', formData)
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

        const formData = new FormData();
        formData.append('avatar', data.form.avatar);
        formData.append('name', data.form.name);
        formData.append('address', data.form.address);
        formData.append('email', data.form.email);
        formData.append('phone', data.form.phone);
        formData.append('_method', 'PATCH');

        axios.post('/api/partners/' + data.partnerId, formData)
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