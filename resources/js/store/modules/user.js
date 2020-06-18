import router from "../../router";

const state = {

    user: null,
    userStatus: null,
    userErrors: null,

};

const getters = {

    authUser: state => {
        return state.user;
    },
    userErrors: state => {
        return state.userErrors;
    }
};

const actions = {

    fetchAuthUser({commit, state}) {
        axios.get('/api/user')
            .then(response => {
                commit('setAuthUser', response.data);
            })
            .catch(error => {
                console.log('Unable to fetch auth user');
                router.push({ path: '/login' });
            });
    },
    loginUser({commit, dispatch}, form) {
        axios.get('/sanctum/csrf-cookie').then(response => {
            
            axios.post('/api/login', { email: form.email, password: form.password, remember: form.remember })
                .then(response => {
                    dispatch('fetchAuthUser');
                    router.push({ path: '/' });
                })
                .catch(errors => {
                    commit('setUserErrors', errors.response.data.errors);
                });
            });
    },
    registerUser({commit}, form) {
        axios.post('api/register', { name: form.name, email: form.email, password: form.password, password_confirmation: form.password_confirm })
            .then(response => {
                router.push({ path: '/login' });
            })
            .catch(errors => {
                commit('setUserErrors', errors.response.data.errors);
            });
    },
    logoutUser() {
        axios.post('api/logout')
            .then(response => {
                router.push({ path: '/login' });
            });
    },
};

const mutations = {

    setAuthUser(state, user) {
        state.user = user;
    },
    setUserErrors(state, errors) {
        state.userErrors = errors;
    }

};

export default {
    state, getters, actions, mutations,
}