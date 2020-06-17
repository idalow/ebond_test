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
    },
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

        const formData = new FormData();
        formData.append('avatar', form.avatar);
        formData.append('name', form.name);
        formData.append('post', form.post);
        formData.append('email', form.email);
        formData.append('phone', form.phone);

        axios.post('/api/employees', formData)
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

        const formData = new FormData();
        formData.append('avatar', data.form.avatar);
        formData.append('name', data.form.name);
        formData.append('post', data.form.post);
        formData.append('email', data.form.email);
        formData.append('phone', data.form.phone);
        formData.append('_method', 'PATCH');

        axios.post('/api/employees/' + data.employeeId, formData)
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