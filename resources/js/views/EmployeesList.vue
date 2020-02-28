<template>

    <div class="m-10 mx-auto w-4/5">
        <div class="flex-col h-full p-24 bg-white rounded-lg shadow-2xl">
            <div class="flex items-center pb-8 justify-between">
                <div class="text-4xl font-semibold tracking-wide">Employees</div>
                <router-link to="/employee/new" class="flex items-center p-2 hover:bg-gray-200 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus-circle"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
                    <p class="font-semibold px-2"> Add new </p>
                </router-link>
            </div>
            <div v-if="employeesStatus === 'Loading' || employeesStatus === null ">Loading employees...</div>
            <div v-else class="flex w-full">
                <Employee v-for="(employee, employeeKey) in employees.data" :key="employeeKey" :employee="employee"/>
            </div>

        </div>
    </div>


</template>

<script>
    import { mapGetters } from 'vuex';
    import Employee from '../components/Employee';

    export default {
        name: 'EmployeesList',

        components: {
            Employee,
        },
        
        computed: {

            ...mapGetters({
                employees: 'employees',
                employeesStatus: 'employeesStatus',
            })

        },

        mounted() {

            this.$store.dispatch('fetchEmployees');

        }
    }
</script>