const state = {
    employees: null,
    employeesStatus: 'Loading',
};

const getters = {
    employees: state => {
        return state.employees;
    },
    employeesStatus: state => {
        return state.employeesStatus;
    },
};

const actions = {
    fetchEmployees({commit, dispatch}) {

        commit('setEmployeesStatus', 'Loading');

        axios.get('/api/employees')
            .then(response => {
                commit('setEmployees', response.data);
                commit('setEmployeesStatus', 'Success');
            })
            .catch(error => {
                commit('setEmployeesStatus', 'Error');
            });
    },
};

const mutations = {
    setEmployees(state, employees) {
        state.employees = employees;
    },
    setEmployeesStatus(state, status) {
        state.employeesStatus = status;
    },
};

export default {
    state, getters, actions, mutations,
}