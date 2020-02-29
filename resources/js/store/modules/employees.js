const state = {
    employees: null,
    employeesStatus: 'Loading',
    employeeErrors: null,
};

const getters = {
    employees: state => {
        return state.employees;
    },
    employeesStatus: state => {
        return state.employeesStatus;
    },
    employeeErrors: state=> {
        return state.employeeErrors;
    }
};

const actions = {
    fetchEmployees({commit, state}) {

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
    saveEmployee({commit, state}, form) {

        commit('setEmployeesStatus', 'Loading');

        axios.post('/api/employees', form)
            .then(response => {
                commit('setEmployeesStatus', 'Sent');
            })
            .catch(errors => {
                commit('setEmployeesStatus', 'Error');
                commit('setEmployeeErrors', errors.response.data.errors);
            });
    },
    fetchEmployee({commit, state}, employeeId) {
        commit('setEmployeesStatus', 'Loading');
        axios.get('/api/employees/' + employeeId )
            .then(response => {
                commit('setEmployees', response.data);
                commit('setEmployeesStatus', 'Success');
            })
            .catch(error => {
                commit('setEmployeesStatus', 'Error');
            });
    },
    updateEmployee({commit, state}, data) {

        commit('setEmployeesStatus', 'Loading');

        axios.patch('/api/employees/' + data.employeeId, data.form)
            .then(response => {
                commit('setEmployeesStatus', 'Sent');
            })
            .catch(errors => {
                commit('setEmployeesStatus', 'Error');
                commit('setEmployeeErrors', errors.response.data.errors);
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
    setEmployeeErrors(state, errors) {
        state.employeeErrors = errors;
    },
};

export default {
    state, getters, actions, mutations,
}